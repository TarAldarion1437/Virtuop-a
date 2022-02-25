// luego del login se muestra esta página y se arma el menu del navbar
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "../style/home.css";
import logo from '../../assets/ckl8l1we3tb21.png';
import logo2 from '../../assets/logo2.png';


//bootstrap

import Nav from 'react-bootstrap/Nav'

//iconos
import {BoxArrowLeft, GeoAlt, ListColumns, PersonRolodex} from 'react-bootstrap-icons'


function Home() {
    const {handleLogout} = useContext(AuthContext);
    return(
            <div className="home" >
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to ="/normas"> <ListColumns/> REGLAS</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to ="/roles"> <PersonRolodex/> ROLES</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to ="/mapa"> <GeoAlt/> MAPA</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link> 
                            <Link to="/"> <BoxArrowLeft/> </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <button onClick={handleLogout} >salir</button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <img  src={logo2} alt="header" className="imgheader"></img>
                    </Nav.Item>
                </Nav>
                
                <Outlet/>
                
                <div className="mainfooter">
                    <div className="virtufooter"> 
                        <img  src={logo} alt="footer" className="imgfooter"></img>
                        <h5>  ©Solarborg 2022 </h5>
                    </div>
                </div>
                
            </div>
    )
}

export default Home;