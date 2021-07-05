import React, { useState , useEffect } from 'react';

const SignUpForm = ({ setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, username, activityLevel, password, passwordConfirmation)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                username: username,
                activity_level: activityLevel,
                password: password,
                password_confirmation: passwordConfirmation
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
                <h2>Sign Up For Momentum:</h2>
                <p>What's your name?</p>
                <input 
                    id="name"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <p>Pick a cool (and unique) username:</p>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <p>What's your activity level?</p>
                <select id="activity_level" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>Intense</option>
                </select>
                <p>Choose a password:</p>
                <input 
                    id="password"
                    type="text" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <p>Confirm password:</p>
                <input 
                    id="password-confirmation"
                    type="text" 
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SignUpForm;