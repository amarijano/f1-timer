import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
