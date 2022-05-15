import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css';
import ThemeProvider from "./context/theme";
import SettingsProvider from "./context/site";
import Main from "./components/main";

function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <Main/>
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default App;
