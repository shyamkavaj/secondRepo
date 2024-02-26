import React, { useContext, useState, useEffect } from "react";
// import Welcome from "./Welcome";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [status, setStatus] = useState(
        {
            email: "",
            password: ""
        }
    );
    // const [flag, setFlag] = useState(0);
    const localHostKey = "user"
    useEffect(() => {
        //   This code will run after the state has been updated
        console.log("Updated state:", status);

    }, [status]);

    const login = (use) => {
        // const cookie = localStorage.getItem(localHostKey) ? 1 : 0;
        setStatus(use);
        
        localStorage.setItem("user", JSON.stringify(use));

    };
    const logout = () => {
        setStatus(null)
        // setFlag(0)
        localStorage.clear();
        console.log("after logout->", status)
    }

    return (
        <AuthContext.Provider value={{ status,localHostKey, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
