# TitanSystems Monaco Editor Wrapper

A wrapper for implementing the Microsoft Monaco Editor in your WinForms / WPF application.

```csharp
using TitanSystems.CodeEditor.UI.WinForms;
using TitanSystems.CodeEditor.Data.BasicModels;

var ed = new CodeEditorControl(new MonacoEditorConfiguration()
{
    Language = EditorLanguage.JavaScript,
    Theme = EditorTheme.VSDark,
    Value = "function hello() {\n\talert('Hello world!');\n}"
});
```

![image](https://github.com/user-attachments/assets/6d1d10fe-768c-4ea0-bfe7-c108406b9053)

![image](https://github.com/user-attachments/assets/44c51afd-0440-4ef6-bdcc-610d6987433a)
