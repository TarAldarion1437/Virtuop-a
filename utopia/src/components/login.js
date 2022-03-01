// Esta es la primera página que se mostrará
import { useState, useContext } from "react";
import AuthContext from "../context/authContext";
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge'
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

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
            <div className="section">
                <div className="row full-height justify-content-center">
                    <div  className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wraper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <br></br>
                                            <h4 className="mb-4 pb-3"> <Badge bg="secondary" style={ {padding: "10px"} } >LOGIN </Badge>  </h4>
                                            <Form>
                                            <div className="form-group mt-2">
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label= "usuario"
                                                    className="mb-3"
                                                >
                                                <Form.Control  type="text" placeholder="usuario" value={user} onChange={handleUser}/>
                                                </FloatingLabel>
                                                </div> 
                                                <br></br>
                                            <div  className="form-group mt-2">
                                                <FloatingLabel
                                                controlId="floatingPassword"
                                                label= "contraseña"
                                                className="mb-3"
                                                >
                                                    <Form.Control type="password" placeholder="contraseña" value={passw} onChange={handlePass} />
                                                </FloatingLabel>
                                                </div>
                                                <button onClick={handleLogin} className="btnlogin" >
                                                    enviar
                                                </button>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Login;

