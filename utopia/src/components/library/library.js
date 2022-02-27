// normas renderizadas

import "../style/norms.css";

import robot from '../../assets/robotfinal.png';

import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'

const Library = () => {
    return(
        <div className="normshome">
            <div className="normcontainer">
                <div>
                    <Container>
                    <h1> <Badge bg="warning">  Reglas </Badge> </h1>
                    <Accordion defaultActiveKey={['0']} alwaysOpen flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Regla #1 </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> Regla #2 </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> Regla #2 </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
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

export default Library;