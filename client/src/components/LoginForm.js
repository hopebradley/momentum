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
        .then(data => {
            if (data.hasOwnProperty('errors')) {
               setLoggedIn(false);
               console.log("wrong username or password");
            } 
            else {
                setUser(data);
                console.log(data)
                setLoggedIn(true);
            }
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>log into momentum</h2>
                <h3>username:</h3>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <h3>password:</h3>
                <input 
                    id="password"
                    type="text" 
                    value={password}
                    autoComplete="off"
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