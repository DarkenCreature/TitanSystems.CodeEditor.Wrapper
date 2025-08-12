using System.Windows;
using TitanSystems.CodeEditor.UI.WpfControl.Models;

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
            var ed = new TitanSystems.CodeEditor.UI.WpfControl.CodeEditorControl(new MonacoEditorConfiguration()
            {
                Language = EditorLanguage.JavaScript,
                Theme = EditorTheme.VSDark,
                Value = "function hello() {\n\talert('Hello Test!');\n}"
            });
            mainGrid.Children.Add(ed);

            new TitanSystems.CodeEditor.UI.WpfControl.CodeEditorWindow(new MonacoEditorConfiguration()
            {
                Language = EditorLanguage.JavaScript,
                Theme = EditorTheme.VSDark,
                Value = "function hello() {\n\talert('Hello Test!');\n}"
            }).Show();
        }
    }
}