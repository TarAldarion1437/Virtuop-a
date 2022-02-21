// luego del login se muestra esta página y se arma el menu del navbar
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "../style/home.css";

//iconos
import {BoxArrowLeft} from 'react-bootstrap-icons'


function Home() {
    const {handleLogout} = useContext(AuthContext);
    return(
            <div >
                <header>
                <Link to ="/normas">  REGLAS</Link>
                <Link to="/"> <BoxArrowLeft/> Volver</Link>
                <button onClick={handleLogout} >salir</button>
                </header>
                <Outlet/>
                
                
                
            </div>
    )
}

export default Home;