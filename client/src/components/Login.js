import React from 'react';
import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h1>Log in</h1>
            {/* onSubmit={loginUser} */}
            <form >
                <input value={'email'} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email'></input>
                <input value={'password'} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password'></input>
                <input type='submit' value='login' />
            </form>
        </div>
    );
}

export default Login;