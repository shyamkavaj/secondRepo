import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'
const LoginPage = () => {

    const { login } = useAuth();
    // console.log(state.login())

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = () => {
    
        console.log("on submit", user, pass)
        login({ user, pass })
    }

    return (
        <div>
            {/* LoginPage {initialObje.name} */}
            <input type="text" name="user" onChange={(e) => { setUser(e.target.value) }} />
            <input type="password" name="pass" onChange={(e) => { setPass(e.target.value) }} />
            <NavLink to="/welcome"><button onClick={handleSubmit}>submit</button></NavLink>
            {/* setState() */}
        </div>
    )
}

export default LoginPage