// import logo from './logo.svg';
import Login from "./Login";
import React, {useState} from "react";
import { Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import Members from "./Members";
import Blog from "./Blog";
import Home from "./Home";

import './App.css';


const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  if(!loggedIn){
    return <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
  }

  return (
 <div className="App-header">
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="members" element={<Members/>}></Route>
     <Route path="blog" element={<Blog/>}></Route>
     <Route path="contact" element={<Contact/>}></Route>
   </Routes>
        </div>
  )
   
}
    

export default App;
