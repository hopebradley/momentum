import React, { useState , useEffect } from 'react';

const SignUpForm = () => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h3>What's your name?</h3>
                <input 
                    id="name"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <h3>Pick a cool (and unique) username:</h3>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <h3>What's your activity level?</h3>
                <select id="activity_level" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                    <option>Low</option>
                    <option>Moderate</option>
                    <option>Intense</option>
                </select>
                <h3>Choose a password:</h3>
                <input 
                    id="password"
                    type="text" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <h3>Confirm password:</h3>
                <input 
                    id="password-confirmation"
                    type="text" 
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}>
                </input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default SignUpForm;