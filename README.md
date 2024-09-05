# TitanSystems.CodeEditor

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
