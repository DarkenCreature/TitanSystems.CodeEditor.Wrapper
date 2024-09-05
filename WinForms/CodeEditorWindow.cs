using TitanSystems.CodeEditor.BusinessLogic;

namespace TitanSystems.CodeEditor.UI.WinForms
{
    public partial class CodeEditorWindow : Form, ICodeEditor
    {
        private CodeEditorControl _editor;

        public CodeEditorWindow(Data.BasicModels.MonacoEditorConfiguration config)
        {
            InitializeComponent();
            _editor = new CodeEditorControl(config);
        }

        public string? GetValue() => _editor.GetValue();
        public void SetValue(string? value) => _editor.SetValue(value);
        public void Save() => _editor.Save();
    }
}
