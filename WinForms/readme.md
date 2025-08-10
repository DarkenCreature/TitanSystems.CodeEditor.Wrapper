# TitanSystems Monaco Editor Wrapper

A wrapper for implementing the Microsoft Monaco Editor in your WinForms / WPF application.

```csharp
namespace TestWinForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            // Initialize the Monaco Editor with TypeScript language and a light theme
            var ed = new TitanSystems.CodeEditor.UI.WinForms.CodeEditorControl(new TitanSystems.CodeEditor.Data.BasicModels.MonacoEditorConfiguration()
            {
                Language = TitanSystems.CodeEditor.Data.BasicModels.EditorLanguage.TypeScript,
                Theme = TitanSystems.CodeEditor.Data.BasicModels.EditorTheme.VSLight,
                Value = "function hello() {\n\talert('Hello world!');\n}"
            });
            ed.Dock = DockStyle.Fill;
            this.Controls.Add(ed);
        }
    }
}
```

![image](https://github.com/user-attachments/assets/6d1d10fe-768c-4ea0-bfe7-c108406b9053)

![image](https://github.com/user-attachments/assets/44c51afd-0440-4ef6-bdcc-610d6987433a)
