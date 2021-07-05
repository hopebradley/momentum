import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import React, { useState } from 'react';

const Login = () => {

    const [hasAccount, setHasAccount] = useState(true);

    function showLogin() {
        if (hasAccount) {
            return (
                <div className="login">
                    <LoginForm />
                    <h3>OR</h3>
                    <button onClick={() => setHasAccount(false)}>Sign Up</button>
                </div>     
            )
            
        }
        else {
            return (
                <div className="login">
                    <SignUpForm />
                    <h3>Have an account?</h3>
                    <button onClick={() => setHasAccount(true)}>Login</button>
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