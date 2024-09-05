namespace TitanSystems.CodeEditor.Data.BasicModels
{
    public sealed class MonacoEditorConfiguration
    {
        public EditorLanguage Language { get; set; } = EditorLanguage.JavaScript;
        public EditorTheme Theme { get; set; } = EditorTheme.VSLight;
        public string? Value { get; set; } = null;
        public string? FilePath { get; set; } = null;
    }
}
