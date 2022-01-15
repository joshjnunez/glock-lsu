// import logo from './logo.svg';
import Login from "./components/Login";

import './App.css';
import { useState } from "react";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  if(!loggedIn){
    return <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
  }

 

  return (
 <div className="App">
  
  Glock
      {/* <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
    </div> 
  );
    }

export default App;
