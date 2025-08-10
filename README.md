# TitanSystems Monaco Editor Wrapper

<img width="300" height="300" alt="ttn_monacoeditor" src="https://github.com/user-attachments/assets/6c8e62fe-0b09-45ff-9470-8e6d00e5ac62" />
A wrapper for implementing the Microsoft Monaco Editor in your WinForms / WPF application.

The control is avaiable on nuget:

[TitanSystems.Monaco.Wrapper.WPF](https://www.nuget.org/packages/TitanSystems.Monaco.Wrapper.WPF)
[TitanSystems.Monaco.Wrapper.WinForms](https://www.nuget.org/packages/TitanSystems.Monaco.Wrapper.WinForms)


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
