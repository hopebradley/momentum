import React, { useState } from 'react';

const SignUpForm = ({ setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [activityLevel, setActivityLevel] = useState("–select one–");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, username, activityLevel, password, passwordConfirmation)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.toLowerCase(),
                username: username.toLowerCase(),
                activity_level: activityLevel,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((resp) => resp.json())
        .then(data => {
            if (data.hasOwnProperty('errors')) {
                console.log(data.errors)
                
                setErrors(data.errors);
                setDataInvalid(true);
            }
            else {
                setUser(data);
                setLoggedIn(true);
            }   
        });
    }

    function displayErrors() {

        return errors.map((e) => {
            return <p>-{e}</p>
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>sign up for momentum:</h2>
                <br></br>
                <p>what's your name?</p>
                <input 
                    id="name"
                    type="text" 
                    value={name}
                    autoComplete="off"
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <p>pick a cool (and unique) username:</p>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <p>what's your activity level?</p>
                <select id="activity_level" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                    <option disabled={true}>–select one–</option>
                    <option>low</option>
                    <option>moderate</option>
                    <option>intense</option>
                </select>
                <br></br>
                <br></br>
                <p>choose a password:</p>
                <input 
                    id="password"
                    type="text" 
                    value={password}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <p>confirm password:</p>
                <input 
                    id="password-confirmation"
                    type="text" 
                    value={passwordConfirmation}
                    autoComplete="off"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}>
                </input>
                <br></br>
                <br></br>
                <input className="button is-success" type="submit"></input>
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>-{e}</p> )}</div> : <p></p>}
            </form>
            
        </div>
    )
}

export default SignUpForm;