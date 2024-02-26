 import { Outlet,Navigate } from "react-router-dom"; 
import { useAuth } from "../context/AuthProvider";
// import { Redirect } from "react-router-dom";
import {  } from "react-router-dom";
const PrivateRoute = () => {
    const { localHostKey } = useAuth();
    const cookie = localStorage.getItem(localHostKey) ? 1 : 0;
    console.log("cookie",cookie)
    console.log(localHostKey)
    return (
        <div>
            {cookie ? <Outlet /> :<Navigate to='/login' />} 
        </div>
    )
}
export default PrivateRoute;