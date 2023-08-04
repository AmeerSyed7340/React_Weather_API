import './App.css';
//import NavBar
function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1 id="Header-Text">
          Weather App
        </h1>
      </div>

      <form className="Search-Form">
        <input type="text" id="Search-Text" placeholder="Search Location"/>
        <button type="submit" id="Search-Btn">🔍</button>
      </form>
    </div>
  );
}

export default App;
