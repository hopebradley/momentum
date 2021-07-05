import React, { useState } from 'react';

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Username:</h3>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <h3>Password:</h3>
                <input 
                    id="password"
                    type="text" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default LoginForm;