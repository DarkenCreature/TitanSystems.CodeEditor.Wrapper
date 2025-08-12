using Microsoft.Web.WebView2.Core;
using Microsoft.Win32;
using Nancy.Json;
using System.IO;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Controls;
using TitanSystems.CodeEditor.UI.WpfControl.Models;

namespace TitanSystems.CodeEditor.UI.WpfControl
{
    /// <summary>
    /// Interaktionslogik für CodeEditorControl.xaml
    /// </summary>
    public partial class CodeEditorControl : UserControl, ICodeEditor
    {
        private MonacoEditorConfiguration _config;
        private bool initialized = false;
        private Dictionary<string, string> fileExtensionMapping = new()
        {
            { ".js", "javascript" },
            { ".ts", "typescript" },
            { ".txt", "plaintext" }
        };

        public CodeEditorControl([Optional] MonacoEditorConfiguration config)
        {
            InitializeComponent();
            _config = config ?? new MonacoEditorConfiguration();

            webView.NavigationCompleted += WebView_NavigationCompleted;
            _ = InitWebViewAsync();
        }

        private async Task InitWebViewAsync()
        {
            await webView.EnsureCoreWebView2Async();
            webView.CoreWebView2.Settings.IsStatusBarEnabled = false;
            webView.CoreWebView2.Settings.AreDevToolsEnabled = false;
            webView.CoreWebView2.Settings.AreDefaultContextMenusEnabled = false;

            webView.CoreWebView2.AddWebResourceRequestedFilter(
                "https://app/*",
                CoreWebView2WebResourceContext.All,
                CoreWebView2WebResourceRequestSourceKinds.All);

            webView.CoreWebView2.WebResourceRequested += CoreWebView2_WebResourceRequested;
            webView.CoreWebView2.Navigate("https://app/index.html");
        }

        private void WebView_NavigationCompleted(object? sender, CoreWebView2NavigationCompletedEventArgs e)
        {
            if (!initialized)
            {
                InitEditorBridge();
                InitializeEditor();
                initialized = true;
            }
        }

        private void InitEditorBridge()
        {
            webView.CoreWebView2.WebMessageReceived += CoreWebView2_WebMessageReceived;
        }

        private void InitializeEditor()
        {
            webView.ExecuteScriptAsync(
                $"initialize('{_config.Language.ToString().ToLower()}', '{_config.Theme}')");

            if (!string.IsNullOrEmpty(_config.Value))
            {
                webView.ExecuteScriptAsync(
                    $"loadEditorValue({new JavaScriptSerializer().Serialize(_config.Value)})");
            }
            else if (!string.IsNullOrEmpty(_config.FilePath))
            {
                LoadFile(_config.FilePath);
            }
        }

        public void LoadFile(string filePath)
        {
            if (!File.Exists(filePath)) return;

            string content = File.ReadAllText(filePath);
            webView.ExecuteScriptAsync($"loadEditorValue({new JavaScriptSerializer().Serialize(content)})");
            webView.ExecuteScriptAsync($"changeEditorLanguage('{FileExtensionMapping(Path.GetExtension(filePath))}')");
        }


        public string? GetValue()
        {
            return _config.Value;
        }

        public void SetValue(string? value)
        {
            _config.Value = value;
            string val = new JavaScriptSerializer().Serialize(value);
            webView.ExecuteScriptAsync($"loadEditorValue({val})");
        }

        public void Save()
        {
            WebMessage_Save([_config.Value ?? ""]);
        }



        private void CoreWebView2_WebMessageReceived(object? sender, CoreWebView2WebMessageReceivedEventArgs e)
        {
            var message = e.WebMessageAsJson;
            var incoming = new JavaScriptSerializer().Deserialize<WebMessage>(message);

            var target = GetType()
                .GetMethods(BindingFlags.NonPublic | BindingFlags.Instance)
                .FirstOrDefault(m => m.GetCustomAttribute<InvokableAttribute>()?.Name == incoming.Action);

            try
            {
                target?.Invoke(this, [incoming.Args]);
            }
            catch
            {
            }
        }

        [Invokable("Save")]
        private void WebMessage_Save(object[] args)
        {
            _config.Value = (string)args[0];

            if (string.IsNullOrEmpty(_config.FilePath))
            {
                var dialog = new SaveFileDialog();
                if (dialog.ShowDialog() == false) return;
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
            if (fileExtensionMapping.TryGetValue(extension, out var lang))
                return lang;

            if (extension.StartsWith("."))
                return extension[1..].ToLowerInvariant();

            return extension.ToLowerInvariant();
        }

        private void CoreWebView2_WebResourceRequested(object? sender, CoreWebView2WebResourceRequestedEventArgs e)
        {
            var uri = new Uri(e.Request.Uri);
            var path = uri.AbsolutePath.TrimStart('/');

            const string BaseNs = "TitanSystems.CodeEditor.UI.WpfControl.res";
            var asm = typeof(ICodeEditor).Assembly;

            static string ToResName(string baseNs, string p) => $"{baseNs}.{p.Replace('/', '.')}";

            string name = ToResName(BaseNs, path);
            Stream? stream = asm.GetManifestResourceStream(name);

            if (stream == null)
            {
                var notFound = new MemoryStream(Encoding.UTF8.GetBytes("Not found"));
                e.Response = webView.CoreWebView2.Environment.CreateWebResourceResponse(
                    notFound, 404, "Not Found", "Content-Type: text/plain");
                return;
            }

            string headers = $"Content-Type: {GetContentType(path)}\r\nCache-Control: no-cache";
            e.Response = webView.CoreWebView2.Environment.CreateWebResourceResponse(stream, 200, "OK", headers);
        }

        private static string GetContentType(string path)
        {
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return ext switch
            {
                ".html" => "text/html; charset=utf-8",
                ".htm" => "text/html; charset=utf-8",
                ".js" => "application/javascript; charset=utf-8",
                ".mjs" => "application/javascript; charset=utf-8",
                ".css" => "text/css; charset=utf-8",
                ".json" => "application/json; charset=utf-8",
                ".map" => "application/json; charset=utf-8",
                ".svg" => "image/svg+xml",
                ".png" => "image/png",
                ".jpg" or ".jpeg" => "image/jpeg",
                ".webp" => "image/webp",
                ".woff" => "font/woff",
                ".woff2" => "font/woff2",
                ".ttf" => "font/ttf",
                ".ico" => "image/x-icon",
                _ => "application/octet-stream"
            };
        }
    }
}
