import './App.css';
import { useState } from 'react'
//import NavBar
function App() {
  const [input, setInput] = useState();
  const [variable, setVariable] = useState();
  const key = 'fxGxrDaQt4YRxPcnwVmUfx5gGILgddK7';
  

  function onChangeInput(e) {
    // console.log(e.target.value);
    setInput(e.target.value);
  }
  function handleForm(e) {
    e.preventDefault();
    console.log(input)
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${input}`;

    fetch(url)
      .then(response => response.json())
      .then(newResponse => newResponse.data.images.original.url)
      .then(result => setVariable(result))

  }

  return (
    <div className="App">
      <div className="Header">
        <h1 id="Header-Text">
          Weather App
        </h1>
      </div>

      <div className="Form-container">
        <form className="Search-Form" onSubmit={handleForm}>
          <input onChange={onChangeInput} type="text" id="Search-Text" placeholder="Search Location" />
          <button type="submit" id="Search-Btn" >🔍</button>
        </form>

        <img src={variable} id="GIF-img" />
      </div>

      <div className="Weather-info">

      </div>
    </div >
  );
}

export default App;
