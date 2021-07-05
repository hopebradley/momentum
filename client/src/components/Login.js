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
                        <p>Don't have an account yet?</p>
                        <button onClick={() => setHasAccount(false)}>Sign Up</button>
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
                        <h3>Already have an account?</h3>
                        <button onClick={() => setHasAccount(true)}>Login</button>
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