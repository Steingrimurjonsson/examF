import { BrowserRouter as Router, Route, NavLink, Switch, useRouteMatch, useParams, Link, Redirect, browserHistory } from "react-router-dom"
import React, { useState } from 'react';
import LogInAsAdmin from "./LoginApp";


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
