using TitanSystems.CodeEditor.UI.WinForms.Models;

namespace TitanSystems.CodeEditor.UI.WinForms
{
    public partial class CodeEditorWindow : Form, ICodeEditor
    {
        private CodeEditorControl _editor;

        public CodeEditorWindow(MonacoEditorConfiguration config)
        {
            InitializeComponent();
            _editor = new CodeEditorControl(config);
            Controls.Add(_editor);
            _editor.Dock = DockStyle.Fill; // Ensure the editor fills the form
            _editor.Show();
        }

        public string? GetValue() => _editor.GetValue();
        public void SetValue(string? value) => _editor.SetValue(value);
        public void Save() => _editor.Save();
    }
}
