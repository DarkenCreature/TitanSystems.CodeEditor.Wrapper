namespace TitanSystems.CodeEditor.UI.WpfControl
{
    public interface ICodeEditor
    {
        public string? GetValue();
        public void SetValue(string? value);
        public void Save();
    }
}
