import '../style/roles.css'
import Citizens from './citizens';
import Otherrole from './otherrole';
import Roledef from './roledef';
import Container from 'react-bootstrap/esm/Container';
import punk from '../../assets/punk.png';

const Roles = () => {
    return(
        <div className="roleshome">
            <div className="rolescontainer">
                    <div>
                        <div>
                            <Roledef/>
                        </div>
                            <br></br> <br></br><br></br> <br></br><br></br><br></br>
                            <br></br> <br></br><br></br><br></br><br></br><br></br>
                            <br></br><br></br>
                        <div>
                            <Citizens/>
                        </div>
                        <div>
                            <Otherrole/>
                        </div>
                    </div>
                    <div className="roleimg">
                        <img className="imgpunk" src={punk} alt="punkgirl"></img>
                    </div>
            </div>
        </div>
    )
}

export default Roles;