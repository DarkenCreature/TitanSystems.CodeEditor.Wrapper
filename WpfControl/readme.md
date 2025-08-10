# TitanSystems Monaco Editor Wrapper

A wrapper for implementing the Microsoft Monaco Editor in your WinForms / WPF application.

```csharp
using System.Windows;

namespace TestApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            // adding the Monaco Editor to the main grid
            var ed = new TitanSystems.CodeEditor.UI.WpfControl.CodeEditorControl(new TitanSystems.CodeEditor.Data.BasicModels.MonacoEditorConfiguration()
            {
                Language = TitanSystems.CodeEditor.Data.BasicModels.EditorLanguage.JavaScript,
                Theme = TitanSystems.CodeEditor.Data.BasicModels.EditorTheme.VSDark,
                Value = "function hello() {\n\talert('Hello Test!');\n}"
            });
            mainGrid.Children.Add(ed);
        }
    }
}
```

![image](https://github.com/user-attachments/assets/6d1d10fe-768c-4ea0-bfe7-c108406b9053)

![image](https://github.com/user-attachments/assets/44c51afd-0440-4ef6-bdcc-610d6987433a)
