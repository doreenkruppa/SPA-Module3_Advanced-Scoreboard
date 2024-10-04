import "./App.css";
import Infoboard from "./components/Infoboard";
import Scoreboard from "./components/Scoreboard";
import ScoreContextProvider from "./context/ScoreContext";

function App() {
  return (
    <div className="App">
      <ScoreContextProvider>
        <Scoreboard />
        <Infoboard />
      </ScoreContextProvider>
    </div>
  );
}

export default App;
