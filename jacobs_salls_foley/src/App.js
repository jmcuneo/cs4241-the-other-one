import logo from './logo.svg';
import Main from './javascript/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Enter a String to Anagramize!</h1>
      <form id="mainform">
        <input type="text" id="string" placeholder="enter string here!" />
        <Main />
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
    </div>
  );
}

export default App;
