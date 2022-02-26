import '../style/roles.css'
import Citizens from './citizens';
import Otherrole from './otherrole';
import Roledef from './roledef';

const Roles = () => {
    return(
        <div className="roleshome">
            <div>
                <Roledef/>
                <br></br> <br></br><br></br> <br></br><br></br><br></br>
                <br></br> <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br>
                <Citizens/>
                <Otherrole/>
            </div>
        </div>
    )
}

export default Roles;