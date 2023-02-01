import "./App.css";
import AppProvider from "./contexts/AppProvider";
import createRoutes from "./routes";

function App() {
  return <AppProvider>{createRoutes()}</AppProvider>;
}

export default App;
