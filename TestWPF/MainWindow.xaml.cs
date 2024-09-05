using System.Windows;

namespace TestWPF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            var ed = new TitanSystems.CodeEditor.UI.WpfControl.CodeEditorControl(new TitanSystems.CodeEditor.Data.BasicModels.MonacoEditorConfiguration()
            {
                Language = TitanSystems.CodeEditor.Data.BasicModels.EditorLanguage.JavaScript,
                Theme = TitanSystems.CodeEditor.Data.BasicModels.EditorTheme.VSDark,
                Value = "function hello() {\n\talert('Hello world!');\n}"
            });
            mainGrid.Children.Add(ed);
        }
    }
}