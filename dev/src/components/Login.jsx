import React from 'react';
import '../App.css';

const Login = ({loggedIn, setLoggedIn}) => {

    // const [isLoggedIn, setIsLoggedIn] =  useState('false');

    const onClickLogin = () => {
         setLoggedIn(!loggedIn)
          console.log(loggedIn);
    }

    return (
        <header className="App-header">
            <div>
            <button onClick={()=> onClickLogin()}>Login</button>
            </div>
        </header>
       
    )


};


export default Login;