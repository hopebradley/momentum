import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import React, { useState } from 'react';

const Login = ({ setUser, setLoggedIn }) => {

    const [hasAccount, setHasAccount] = useState(true);

    function showLogin() {
        if (hasAccount) {
            return (
                <div className="login box">
                    <LoginForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <br></br>
                    <div className="question">
                        <p>don't have an account yet?</p>
                        <button className="button is-medium is-info is-light is-outlined" onClick={() => setHasAccount(false)}>sign up</button>
                    </div>
                </div>     
            )
            
        }
        else {
            return (
                <div className="login box">
                    <SignUpForm setUser={setUser} setLoggedIn={setLoggedIn}/>
                    <br></br>
                    <div className="question">
                        <h3>already have an account?</h3>
                        <button className="button is-medium is-info is-light is-outlined" onClick={() => setHasAccount(true)}>login</button>
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