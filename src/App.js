
import './App.css';
let myName = "Imanze"
const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
       <h2> Hello {myName} </h2>
       <p>This is the content of the paragraph</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
