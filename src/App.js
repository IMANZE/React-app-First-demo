
import './App.css';
import FirstComponent from './FirstComponent'; 
import SecondComponent from './SecondComponent';

const App = () => {
  let myName = 'Imanze'
  return (
    <div className="App">
      <header className="App-header">
       <h2> Hello {myName} </h2>
       <p>This is the content of the paragraph</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SecondComponent  content = "Hello World" customClass="text-red"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FirstComponent /> 
        <SecondComponent  content = "React js World" customClass="text-yellow"/>
      </header>
    </div>
  );
}

export default App;
