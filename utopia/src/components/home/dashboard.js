// esta tarjeta tendrá las tarjetas que mandan a role norms y map
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet'


const Dashboard = () => {
    return(
        <div className="dashboard"> 
            <Helmet  title="Solarborg Menu" />
            <div className="containerdash">
                <div className="cardash">
                    <div className="face face1">
                        <div className="contentdash"> 
                            <img style={{maxWidth: "150px", height: "auto"}} src="https://cdn.pixabay.com/photo/2017/02/01/09/55/arrow-2029273_960_720.png" alt="normas" ></img>
                            <h3> Normas</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="contentdash">
                            <p> Repasa las reglas de Solarborg </p>
                            <Link to ="/normas">  ENTRAR</Link>
                        </div>
                    </div>
                    </div>
                    <div className="cardash">
                        <div className="face face1">
                            <div className="contentdash"> 
                                <img style={{maxWidth: "150px", height: "auto"}} src="https://cdn.pixabay.com/photo/2013/07/12/12/45/compass-146166_960_720.png" alt="mapa" ></img>
                                <h3> Mapa</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="contentdash">
                            <p> Visualiza el mapa del edificio y decide qué actividad hacer </p>
                            <Link to ="/mapa">  ENTRAR</Link>
                        </div>
                    </div>
                    </div>
                    <div className="cardash">
                    <div className="face face1">
                        <div className="contentdash"> 
                            <img style={{maxWidth: "150px", height: "auto"}} src="https://cdn.pixabay.com/photo/2017/01/08/10/47/group-1962587_960_720.png" alt="roles" ></img>
                            <h3> Roles</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="contentdash">
                            <p> Conoce tu rol de este mes </p>
                            <Link to ="/roles">  ENTRAR </Link>
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
    )
}

export default Dashboard;