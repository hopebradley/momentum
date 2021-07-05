import React, { useState , useEffect } from 'react';

const SignUpForm = () => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    return (
        <div>
            <form>
                <input type="text"></input>
            </form>
        </div>
    )
}