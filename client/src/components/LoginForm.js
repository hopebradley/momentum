import React, { useState } from 'react';

const LoginForm = ({ setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((resp) => resp.json())
        .then(user => {
            setUser(user);
            setLoggedIn(true);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Log Into Momentum</h2>
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
                <br></br>
                <br></br>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    )
}

export default LoginForm;