import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'
const Welcome = () => {

    const { logout,status } = useAuth();
    const userName = JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <div>
                <h1>Welcome {userName.user} {status.email}</h1>
                <NavLink to="/login"><button onClick={logout}>logOut</button></NavLink>
            </div>
        </div>
    )
}

export default Welcome;