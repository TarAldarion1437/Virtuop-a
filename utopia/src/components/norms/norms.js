// normas renderizadas

import "../style/norms.css";

import robot from '../../assets/robotfinal.png';

import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'

const Norms = () => {
    return(
        <div className="normshome">
            <div className="normcontainer">
                <div>
                    <Container>
                    <h1> <Badge bg="success" >  Reglas </Badge> </h1>
                    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="normsheader"> Regla #1 </Accordion.Header>
                            <Accordion.Body>
                                No atentarás contra la integridad física del prójimo, de ti mismo, ni de las instalaciones del recinto.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="normsheader"> Regla #2 </Accordion.Header>
                            <Accordion.Body>
                                No sobrepasar los límites designados
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="normsheader"> Regla #3 </Accordion.Header>
                            <Accordion.Body>
                                Cumplir con las funciones designadas por el algoritmo. No faltar al rol asignado
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    </Container>
                </div>
                <div>
                    <img className="normsimg"  src={robot} alt="robot"></img>
                </div>
            </div>
        </div>
    )
}

export default Norms;