import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  // Declare a variable
  var myname = "omar";

  return (
    <div style={{ border: "1px solid white", margin: "10px" }}>
      <h1>APP PAGE:</h1>
      {/* PROPS */}
      {/* On passe la variable vers l'enfant HOME en tant que propriété username */}
      <Home username={myname} />
      <About username={myname} />
    </div>
  );
}

export default App;
