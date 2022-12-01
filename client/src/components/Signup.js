import React from 'react';
import { useState } from 'react';
//import { useHistory } from 'react';

function Signup () {
    //const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h1>Sign Up</h1>
            {/* onSubmit={signUpUser} */}
            <form >
                <input value={'name'} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name'></input>
                <input value={'email'} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email'></input>
                <input value={'password'} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password'></input>
                <input type='submit' value='signUp' />
            </form>
        </div>
    );
}

export default Signup;