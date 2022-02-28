import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);

    const navigate = useNavigate();
    
    const handleAuth = (user, pass) => {
        console.log("Cualquier cosa blablabla");
        if(user === "quevedo17" && pass === "velaskeyosoiguapa?"){
            setAuth(true);
            console.log(true);
        }
    }
    const handleLogout = () => {
        navigate("/");
        setAuth(false);
    }
    const data = {auth, handleAuth, handleLogout};
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;