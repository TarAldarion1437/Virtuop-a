// Esta es la primera página que se mostrará
import { useState, useContext } from "react";
import AuthContext from "../context/authContext";


const Login = () => {
    const {handleAuth} = useContext(AuthContext);

    const [user, setUser] = useState("");
    const [passw, setPassw] = useState("");

    const handleUser = (e)=> {
        setUser(e.target.value);
    }
    const handlePass = (e)=>{
        setPassw(e.target.value);
    }
    const handleLogin = ()=>{
        handleAuth(user, passw);
    }

    return(
        <div className="login">
            <div className="loginbackground">
            <h1>LOGIN</h1>
            <form size="sm"> 
                <label for="user" fontweight="bold">user</label>
                <input id="user"  type="text" value={user} onChange={handleUser}/>
                <br></br>
                <label for="passw" >password</label>
                <input id="passw" type="password" value={passw} onChange={handlePass}/> 
                <br></br>
                <button onClick={handleLogin}> Enviar</button>
            </form>
            </div>
        </div>
    )
}

export default Login;