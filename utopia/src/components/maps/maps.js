import '../style/maps.css'
import robot from '../../assets/robotfinal.png';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { Building } from 'react-bootstrap-icons'


const Maps = () => {
    return(
        <div className="maphome"> 
            <div className="mapcontainer">  
                <div> <Building   size={96}/> <br></br>
                <Container className="floorcontainer"> 
                    <h1>Lobby</h1>
                    
                    <ListGroup horizontal variant="flush">
                        <ListGroup.Item className="maplist" >
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#1</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item >
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem', background: 'rgb(14, 51, 75, 0.3)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#2</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#3</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#4</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#5</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                <br></br>
                <Container className="floorcontainer"> 
                    <h1>Piso 1</h1>
                        
                    <ListGroup horizontal variant="flush">
                        <ListGroup.Item className="maplist" >
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#1</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item >
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#2</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#3</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#4</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#5</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                <br></br>
                <Container className="floorcontainer"> 
                    <h1>Terraza</h1>
                        
                    <ListGroup horizontal variant="flush">
                        <ListGroup.Item className="maplist" >
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#1</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item >
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#2</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#3</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#4</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist">
                            <Card style={{ width: '12rem'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title> Cuarto#5</Card.Title>
                                <Card.Text> Esta es la descripción de todo lo que iría en un card text </Card.Text>
                                </Card.Body>
                                <Card.Footer> Entrar </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                </div> 
                <div >
                    <img className="mapimg" src={robot} alt="robot"></img>
                </div>
            </div>
        </div>
    )
}

export default Maps;