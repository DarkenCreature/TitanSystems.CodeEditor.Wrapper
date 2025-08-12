namespace TitanSystems.CodeEditor.UI.WinForms
{
    public interface ICodeEditor
    {
        public string? GetValue();
        public void SetValue(string? value);
        public void Save();
    }
}
