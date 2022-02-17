import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    
    const handleAuth = (user, pass) => {
        console.log("Cualquier cosa blablabla");
        if(user === "admin" && pass === "12345"){
            setAuth(true);
            console.log(true);
        }
    }
    const data = {auth, handleAuth};
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export {AuthProvider};
export default AuthContext;