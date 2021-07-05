import React, { useState } from 'react';

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form>
                <input type="text"></input>
            </form>
        </div>
    )
}

export default LoginForm;