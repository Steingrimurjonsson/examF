import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
//import App from './App';
//import App2 from './App2';

//import App3 from './App3';

//import App4 from './App4';

//import App6 from './App6';
//import ListDemoApp from './ListDemoApp';
//import ListDemoApp2 from './ListDemoApp2';
//import NameForm from './FormDemo';
//import ReservationForm from './FormDemoMultiple';
//import AppTD from './AppTD';
import AppRecipe from './AppRecipe';

function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
 // function tick() {
  //  ReactDOM.render(
   //   <Clock date={new Date()} />,
   //   document.getElementById('root5')
  //  );
 // }
  
 // setInterval(tick, 1000);

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<App2 />, document.getElementById('root2'));

//ReactDOM.render(<App3 />, document.getElementById('root3'));

//ReactDOM.render(<App4 />, document.getElementById('root4'));

//ReactDOM.render(<App6 />, document.getElementById('root6'));
//ReactDOM.render(<ListDemoApp />, document.getElementById('root7'));
//ReactDOM.render(<ListDemoApp2 />, document.getElementById('root8'));
//ReactDOM.render(<NameForm />, document.getElementById('root9'));
//ReactDOM.render(<ReservationForm />, document.getElementById('root10'));
//ReactDOM.render(<AppTD />, document.getElementById('root11'));
ReactDOM.render(<AppRecipe />, document.getElementById('root12'));