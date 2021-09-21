import logo from './logo.svg';
import python from './python.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={python} className="App-logo" alt="logo" />
        <p>
          Contacto <code>en Linkedin</code>.
        </p>
        <a
          className="App-link"
          href="https://github.com/RamiroPeidro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ramiro Peidro GitHub personal
        </a>
      </header>
    </div>
  );
}

export default App;
