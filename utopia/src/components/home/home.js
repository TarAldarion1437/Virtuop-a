// luego del login se muestra esta página y se arma el menu del navbar
import { useContext } from "react";
import { Link, Outlet} from 'react-router-dom';
import AuthContext from "../../context/authContext";
import "../style/home.css";
import logo from '../../assets/ckl8l1we3tb21.png';
import logo2 from '../../assets/logo2.png';



//bootstrap

import Nav from 'react-bootstrap/Nav'

//iconos
import {BoxArrowLeft, GeoAlt, ListColumns, PersonRolodex, BookFill} from 'react-bootstrap-icons'


function Home() {
    const {handleLogout} = useContext(AuthContext);
    return(
            <div className="home" >
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link>
                            <button className="btnhome"> 
                                <Link to ="/normas" className="linkh"> <ListColumns/> </Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <button className="btnhome"> 
                                <Link to ="/roles" className="linkh"> <PersonRolodex/> </Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <button className="btnhome"> 
                                <Link to ="/mapa" className="linkh"> <GeoAlt/> </Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link> 
                            <button className="btnhome"> 
                                <Link to="/library" className="linkh"> <BookFill/> </Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link> 
                            <button className="btnhome"> 
                                <Link to="/" className="linkh"> <BoxArrowLeft/> </Link>
                            </button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <button className="btnhome" onClick={handleLogout} ><span>salir </span> </button>
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