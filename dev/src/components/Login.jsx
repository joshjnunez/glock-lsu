import React, {useState} from 'react';
import '../App.css';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./Login.css";

const Login = ({loggedIn, setLoggedIn}) => {

    // const [isLoggedIn, setIsLoggedIn] =  useState('false');

    // const onClickLogin = () => {
    //      setLoggedIn(!loggedIn)
    //       console.log(loggedIn);
    // }
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
          setLoggedIn(!loggedIn);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="App-header">
        <div className="login-form">
          <h3 className="title">Sign In</h3>
          {renderForm}
        </div>
      </div>
    );
  
    // return (
    //     <header className="App-header">
    //         <div>
            
    //         <button onClick={()=> onClickLogin()}>Login</button>
    //         </div>
    //     </header>
       
    // )



};


export default Login;