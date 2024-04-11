import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 class="outfit-header-font">Ticket Reservation System</h1>
            <form>
                <label for="FirstName">First Name: </label>
                <input type="text" id="FirstName" placeholder="First Name" required="required"/>
                <label for="MiddleName">Middle Name: </label>
                <input type="text" id="MiddleName" placeholder="Middle Name"/>
                <label for="LastName">Last Name: </label>
                <input type="text" id="LastName" placeholder="Last Name"/> <br/>
                <label for="Email">Email: </label>
                <input type="email" id="Email" placeholder="Email" required="required"/>
                <label for="StartLocation">Start Location: </label>
                <input type="text" id="StartLocation" placeholder="USA Start Location" required="required"/>
                <label for="Destination">Destination: </label>
                <input type="text" id="Destination" placeholder="USA destination" required="required"/>
            </form>
            <label for="transport-mode" >Choose your transportation mode:</label>
            <select name="Transportation mode" id="transport-mode">
                <option value="Choose">Choose</option>
                <option value="Lyft">Lyft</option>
                <option value="Uber">Uber</option>
                <option value="PeterPan Bus">PeterPan Bus</option>
                <option value="Greyhound Bus">Greyhound Bus</option>
                <option value="Our Bus">Our Bus</option>
                <option value="Subway">Subway</option>
                <option value="Commuter Rail">Commuter Rail</option>
            </select><br/>
            <button class="outfit-inside-buttons-font submit" type="Submit" id="Submit">Submit</button>
            <button onclick="NewData()" type="button" id="Confirm">Confirm</button>
            <div id="booking_details">
                <table> <tr> <th> Unique ID </th><th> First Name </th> <th> Middle Name </th>
                    <th> Last Name</th><th> Email </th> <th>Start Location</th> <th> Destination </th>
                    <th>Mode of Transportation</th> <th>Cost</th> </tr><tbody id="data_body"></tbody>
                </table>
            </div>
            <footer>
                <p>Copyright &copy; Ronak Wani. All rights reserved.</p>
            </footer>
        </>
    )
}
export default App
