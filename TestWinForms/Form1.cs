using TitanSystems.CodeEditor.UI.WinForms.Models;

namespace TestWinForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            var ed = new TitanSystems.CodeEditor.UI.WinForms.CodeEditorControl(new MonacoEditorConfiguration()
            {
                Language = EditorLanguage.TypeScript,
                Theme = EditorTheme.VSLight,
                Value = "import('./test.js');\n\nfunction hello() {\n\talert('Hello world!');\n}"
            });
            ed.Dock = DockStyle.Fill;
            this.Controls.Add(ed);

            new TitanSystems.CodeEditor.UI.WinForms.CodeEditorWindow(new MonacoEditorConfiguration()
            {
                Language = EditorLanguage.TypeScript,
                Theme = EditorTheme.VSLight,
                Value = "import('./test.js');\n\nfunction hello() {\n\talert('Hello world!');\n}"
            }).Show();
        }
    }
}
