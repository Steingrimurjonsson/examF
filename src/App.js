import { BrowserRouter as Router, Route, NavLink} from "react-router-dom"
import React, { Component } from 'react';
import LogInAsAdmin from "./LoginApp";
import facadeRec from "./RecFacade";



export default function App() {

  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
}
const Header = () => {
  return (


    
          <ul class="nav navbar-nav ml-auto">

            <li>  <NavLink to="/"><a>Home</a></NavLink></li>
            <li>  <NavLink to="/about"><a>About</a></NavLink></li>
            <li>  <NavLink to="/login"><a>Login</a></NavLink></li>
          </ul>
      
  );
}
class RecData extends Component { // MAKE COUNTRY VALUE LOWER CASE 
    constructor(props) {
        super(props);
        this.state = {
          data: {},
        };
      }
    componentDidMount() {
        fetch("http://localhost:8080/ExamB/api/recipes/getrecipe")
          .then(response => response.json())
         .then(data => this.setState({data: data}))
    };
    render() {
  
        //var mySubString = JSON.stringify(([this.state]));
        let test = this.state.data;
      //console.log(test);
      for(let i = 0; i < test.length; i++){

        let childArray = test[i].child;
     
        for(let j = 0; j < childArray.length; j++){
     
       console.log(childArray[j]);
     
        }
     
     }
  
      return (
        <div>
     
        </div>
      );
    }
  }

const Content = () => {
  return (
    <div>
      <Route excat path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>

    </div>
  );
}
function Home() {
    return (
        <div>
          <div>
            <h2>Welcome to recipe list</h2>
            <RecData /> 
            </div>
        </div>
      
      );
}

function Login() {
  return <LogInAsAdmin /> 
}


function About() {
  return (
    <div>
      <div>
        <h2>About Fly&See</h2>
        <h4>At Fly&See we do our best to provide you with the most competitive prices to and from your desired destinations, as well as giving you a small guide and overview of sights and acctivities to do when you arrive. </h4>
      </div>
    </div>
  
  );
  
}
