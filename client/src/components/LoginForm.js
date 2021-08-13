import React, { useState } from 'react';

const LoginForm = ({ setUser, setLoggedIn }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dataInvalid, setDataInvalid] = useState(false);
    const [errors, setErrors] = useState([]);


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
               setDataInvalid(true);
               setErrors(data.errors);
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
                <br></br>
                <h3>username:</h3>
                <input 
                    id="username"
                    type="text" 
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <br></br>
                <br></br>
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
                <input className="button is-success" type="submit" value="Login"></input>
                {dataInvalid ? <div className="errors"><h3>Uh oh!</h3>{errors.map((e) => <p>{e}</p> )}</div> : <p></p>}
            </form>
        </div>
    )
}

export default LoginForm;