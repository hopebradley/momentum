import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import React, { useState } from 'react';

const Login = ({ setUser, setLoggedIn }) => {

    const [hasAccount, setHasAccount] = useState(true);

    function showLogin() {
        if (hasAccount) {
            return (
                <div className="login">
                    <LoginForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <br></br>
                    <div className="question">
                        <p>don't have an account yet?</p>
                        <button onClick={() => setHasAccount(false)}>sign up here</button>
                    </div>
                </div>     
            )
            
        }
        else {
            return (
                <div className="login">
                    <SignUpForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <br></br>
                    <div className="question">
                        <h3>already have an account?</h3>
                        <button onClick={() => setHasAccount(true)}>login here</button>
                    </div>
                    
                </div> 
            )
        }
    }

    return (
        <div>
            {showLogin()}
        </div>
    )
}
export default Login;