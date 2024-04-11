import logo from './logo.svg';
import './javascript/Main.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <h1>Enter a String to Anagramize!</h1>
        <form id="mainform">
          <input type="text" id="string" value="enter string here!" />
          <button id="submit">Generate!</button>
        </form>
        <div id="table">
          <span>
            <b>String</b>
          </span>
          <span>
            <b>Anagram 1</b>
          </span>
          <span>
            <b>Anagram 2</b>
          </span>
          <span>
            <b>Anagram 3</b>
          </span>
          <span>
            <b>Anagram 4</b>
          </span>
          <span>
            <b>Remove</b>
          </span>
        </div>
        <footer>
          <p>
            Trash can icons created by <a href="https://www.flaticon.com/free-icons/trash-can" title="trash can icons">kliwir art - Flaticon</a>
          </p>
        </footer>
      </body>
    </div>
  );
}

export default App;
