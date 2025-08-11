using System.Windows;
using TitanSystems.CodeEditor.UI.WpfControl.Models;

namespace TitanSystems.CodeEditor.UI.WpfControl
{
    /// <summary>
    /// Interaktionslogik für CodeEditorWindow.xaml
    /// </summary>
    public partial class CodeEditorWindow : Window, ICodeEditor
    {
        private CodeEditorControl _editor;

        public CodeEditorWindow(MonacoEditorConfiguration config)
        {
            InitializeComponent();
            _editor = new CodeEditorControl(config);
            grid.Children.Add(_editor);
        }

        public string? GetValue() => _editor.GetValue();
        public void SetValue(string? value) => _editor.SetValue(value);
        public void Save() => _editor.Save();
    }
}
