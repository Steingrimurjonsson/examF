import React from 'react';
import './App.css';
import person from "./file2";
import {males} from "./file2";
import {females} from "./file2";
const {firstName, email} = person;
console.log([...males,"Kurt","Helle", ...females,"Tina"]);
function App2() {
  return (
    <div className="App">
     <p>{firstName}</p>
     <p>{email}</p>
    
     
    </div>
  );
}

export default App2;
