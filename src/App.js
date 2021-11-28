import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
