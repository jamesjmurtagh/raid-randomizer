import logo from './logo.svg';
import './App.css';
import Table from './Table.js';

function App() {
  return (
    <div className="App">
      <div className="input-container">
          <label htmlFor="numTanks">Tanks:</label>
          <input type="number" id="numTanks"/>
          
          <label htmlFor="numHealers">Healers:</label>
          <input type="number" id="numHealers" />
          
          <label htmlFor="numDps">DPS:</label>
          <input type="number" id="numDps" />
        </div>
      <div className="form-container">
          {/* <input type="text" id="nameInput" placeholder="Enter Name"/> */}
          {/* <button id="nameInputBtn" onclick="addName()">Submit</button> */}
      </div>
      <Table />
    </div>
  );
}

export default App;



