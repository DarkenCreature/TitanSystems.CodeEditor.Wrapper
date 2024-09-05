# TitanSystems.CodeEditor

```csharp
using TitanSystems.CodeEditor.UI.WinForms;
using TitanSystems.CodeEditor.Data.BasicModels;

var ed = new CodeEditorControl(new MonacoEditorConfiguration()
{
  Language = TitanSystems.CodeEditor.Data.BasicModels.EditorLanguage.JavaScript,
  Theme = TitanSystems.CodeEditor.Data.BasicModels.EditorTheme.VSDark,
  Value = "function hello() {\n\talert('Hello world!');\n}"
});
```
