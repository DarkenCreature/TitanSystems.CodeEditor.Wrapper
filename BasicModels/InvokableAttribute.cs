namespace TitanSystems.CodeEditor.Data.BasicModels
{
    public sealed class InvokableAttribute : Attribute
    {
        public string Name { get; set; }

        public InvokableAttribute(string name)
        {
            Name = name;
        }
    }
}
