namespace TestWinForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            var ed = new TitanSystems.CodeEditor.UI.WinForms.CodeEditorControl(new TitanSystems.CodeEditor.Data.BasicModels.MonacoEditorConfiguration()
            {
                Language = TitanSystems.CodeEditor.Data.BasicModels.EditorLanguage.JavaScript,
                Theme = TitanSystems.CodeEditor.Data.BasicModels.EditorTheme.VSDark,
                Value = "function hello() {\n\talert('Hello world!');\n}"
            });
            ed.Dock = DockStyle.Fill;
            this.Controls.Add(ed);
        }
    }
}
