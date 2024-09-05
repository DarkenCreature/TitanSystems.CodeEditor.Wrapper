using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;
using Nancy.Json;
using System.Reflection;
using System.Runtime.InteropServices;
using TitanSystems.CodeEditor.BusinessLogic;
using TitanSystems.CodeEditor.Data.BasicModels;

namespace TitanSystems.CodeEditor.UI.WinForms
{
    public partial class CodeEditorControl : UserControl, ICodeEditor
    {
        public WebView2 webView;
        private MonacoEditorConfiguration _config;
        private bool initialized = false;
        private Dictionary<string, string> fileExtensionMapping = new()
        {
            { ".js", "javascript" },
            { ".ts", "typescript" }
        };

        public CodeEditorControl([Optional] MonacoEditorConfiguration config)
        {
            webView = new WebView2();
            webView.Dock = DockStyle.Fill;
            this.Controls.Add(webView);

            _config = config ?? new MonacoEditorConfiguration();
            webView.NavigationCompleted += WebView_NavigationCompleted;
            webView.Source = new Uri(Path.Combine(
                Application.StartupPath,
                @"res\index.html"
            ));
        }

        public void LoadFile(string filePath)
        {
            if (File.Exists(filePath))
            {
                string content = File.ReadAllText(filePath);
                webView.ExecuteScriptAsync($"loadEditorValue({new Nancy.Json.JavaScriptSerializer().Serialize(content)})");
                webView.ExecuteScriptAsync($"changEditorLanguage('{FileExtensionMapping(Path.GetExtension(filePath))}')");
            }
        }

        public string? GetValue()
        {
            return _config.Value;
        }

        public void SetValue(string? value)
        {
            _config.Value = value;
            webView.ExecuteScriptAsync($"loadEditorValue({new JavaScriptSerializer().Serialize(value)})");
        }



        private void WebView_NavigationCompleted(object? sender, Microsoft.Web.WebView2.Core.CoreWebView2NavigationCompletedEventArgs e)
        {
            if (!initialized)
                InitializeEditor();
        }

        private void InitializeEditor()
        {
            webView.ExecuteScriptAsync($"initialize('{_config.Language.ToString().ToLower()}', '{_config.Theme}');");
            webView.CoreWebView2.WebMessageReceived += CoreWebView2_WebMessageReceived;

            if (!System.String.IsNullOrEmpty(_config.Value))
                webView.ExecuteScriptAsync($"loadEditorValue({new Nancy.Json.JavaScriptSerializer().Serialize(_config.Value)})");
            else if (!System.String.IsNullOrEmpty(_config.FilePath))
                LoadFile(_config.FilePath);

            initialized = true;
        }

        private void CoreWebView2_WebMessageReceived(object? sender, CoreWebView2WebMessageReceivedEventArgs e)
        {
            var message = e.WebMessageAsJson;
            var incoming = new JavaScriptSerializer().Deserialize<WebMessage>(message);

            var _m = this.GetType().GetMethods(BindingFlags.NonPublic | BindingFlags.Instance).Where(m =>
                m.GetCustomAttribute<InvokableAttribute>() != null
                && m.GetCustomAttribute<InvokableAttribute>()?.Name == incoming.Action
            );

            try
            {
                int i = _m.Count();
                _m?.FirstOrDefault()?.Invoke(this, [ incoming.Args ]);
            }
            catch { }
        }

        [Invokable("Save")]
        private void WebMessage_Save(object[] args)
        {
            _config.Value = (string)args[0];

            if (System.String.IsNullOrEmpty(_config.FilePath))
            {
                var dialog = new SaveFileDialog();
                DialogResult res = dialog.ShowDialog();
                if (res != DialogResult.OK)
                    return;

                _config.FilePath = dialog.FileName;
            }

            File.WriteAllText(_config.FilePath, (string)args[0]);
        }

        [Invokable("SyncValue")]
        private void WebMessage_SyncValue(object[] args)
        {
            _config.Value = (string)args[0];
        }



        private string FileExtensionMapping(string extension)
        {
            if (fileExtensionMapping.ContainsKey(extension))
                return fileExtensionMapping[extension];
            else if (extension.StartsWith("."))
                return extension.Split('.')[1].ToLower();
            else
                return extension.ToLower();
        }
    }
}
