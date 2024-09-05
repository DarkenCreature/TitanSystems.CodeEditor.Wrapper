using System.Windows;
using TitanSystems.CodeEditor.BusinessLogic;

namespace TitanSystems.CodeEditor.UI.WpfControl
{
    /// <summary>
    /// Interaktionslogik für CodeEditorWindow.xaml
    /// </summary>
    public partial class CodeEditorWindow : Window, ICodeEditor
    {
        private CodeEditorControl _editor;

        public CodeEditorWindow(Data.BasicModels.MonacoEditorConfiguration config)
        {
            InitializeComponent();
            _editor = new CodeEditorControl(config);
        }

        public string? GetValue() => _editor.GetValue();
        public void SetValue(string? value) => _editor.SetValue(value);
    }
}
