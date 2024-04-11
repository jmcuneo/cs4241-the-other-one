import logo from './logo.svg';
import './App.css';

function App() {

  const data = [
    { "name": "Jack", "birthday": "05/24/2002", "preferredCake": "chocolate", "age": 21, "id": 0 },
    { "name": "Jim", "birthday": "10/13/1938", "preferredCake": "vanilla", "age": 85, "id": 1 },
    { "name": "John", "birthday": "07/18/1967", "preferredCake": "swirl", "age": 56, "id": 2 }
  ]

  return (
    <div>
    <h1>Data Table</h1>
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Birthday</th>
          <th>Cake</th>
          <th>More</th>
        </tr>
        {data.map((val, key) => {
          return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.birthday}</td>
                <td>{val.preferredCake}</td>
              </tr>
          )
        })}
      </table>


    <div id="all-forms-container" className="flex-row">

      <div id="form-new-container" className="form-container">
        <h3 className="form-header">Form for New Entry</h3>
        <form id="form-new" onKeyDown="if(event.keyCode === 13) {
          return false;
        }">
          <label>Name:</label>
          <input type="text" id="yourname" placeholder="your name here"/>
            <label>Birthday (MM/DD/YYYY):</label>
            <input type="text" id="yourbday" placeholder="your bday here"/>
              <label>Preferred Cake Flavor:</label>
              <input type="text" id="yourcake" placeholder="your preferred cake flavor here"/>
                <button id="submit">submit</button>
        </form>
      </div>

      <div id="form-update-container" className="form-container">
        <h3 className="form-header">Form for Updating Entry (Click on an ID in table)</h3>
        <form id="form-update" onKeyDown="if(event.keyCode === 13) {
          return false;
        }">
          <label>ID:</label>
          <input type="number" id="id" disabled/>
            <label>Name:</label>
            <input type="text" id="name" placeholder="name here"/>
              <label>Age:</label>
              <input type="number" id="age" disabled/>
                <label>Birthday (MM/DD/YYYY):</label>
                <input type="text" id="bday" placeholder="bday here"/>
                  <label>Preferred Cake Flavor:</label>
                  <input type="text" id="cake" placeholder="preferred cake flavor here"/>
                    <button id="update">update</button>
        </form>
      </div>

    </div>
  </div>
  );
}

export default App;
