import React from 'react';
import './App.css';
import {names} from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  function WelcomePerson(props) {
    const person = props.person;
    const {firstName, lastName, email} = person;
    return <h1>Hello, firstName:{firstName} lastName:{lastName} email: {email}</h1>;
  }
  
  function App3() {
    return (
        
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <WelcomePerson person={names[0]}  />
        
      </div>
    );
  }

export default App3;

  