import '../style/maps.css'
import robot from '../../assets/robotfinal.png';
import band1 from '../../assets/banderamarill.png';
import band2 from '../../assets/banderaverde.png';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import { Building } from 'react-bootstrap-icons'


const Maps = () => {
    return(
        <div className="maphome"> 
            <div className="mapcontainer">  
                <div> <Building  className="mapti"  size={96}/> <br></br>
                <Container className="floorcontainer"> 
                    <h1 className="mapti">Lobby</h1>
                    
                    <ListGroup horizontal variant="flush">
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}} >
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Cafetería </Card.Title>
                                <Card.Text> comedor social, almacén de víveres y restaurante colectivo </Card.Text>
                                </Card.Body>
                                <Card.Footer> 
                                <button className="btnhome1">  <span> Entra</span>   </button>
                                </Card.Footer>
                            </Card>
                        </ListGroup.Item >
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}} >
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Salón social </Card.Title>
                                <Card.Text> Cuarto de juegos y espacio para encuentros grupales </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span> Entra</span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}} >
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Salón cultural#1</Card.Title>
                                <Card.Text> Cinemateca y auditorio para eventos sociales y culturales </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span> Entra</span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}} >
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Plaza de víveres</Card.Title>
                                <Card.Text> Lugar de abastecimiento para el hogar </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span> Entra </span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                <br></br>
                <Container className="floorcontainer"> 
                    <h1 className="mapti">Piso 1</h1>
                        
                    <ListGroup horizontal variant="flush">
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}} >
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Salón cultural #2</Card.Title>
                                <Card.Text> Biblioteca y salas de lectura </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span>Entra </span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item >
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}}>
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Laboratorios</Card.Title>
                                <Card.Text> Centro de investigación científica </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span> Entra</span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}}>
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Salón cultural# 3 </Card.Title>
                                <Card.Text> Sala de música, y ensayo de danza y teatro </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span> Entra</span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}}>
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Cuarto de edición</Card.Title>
                                <Card.Text> Donde realizar contenidos audiovisuales de información y entretenimiento </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span>Entra </span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}}>
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Dormitorios</Card.Title>
                                <Card.Text>Compartidos o individuales, un espacio para descansar</Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1">  <span> Entra</span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                <br></br>
                <Container className="floorcontainer"> 
                    <h1 className="mapti">Terraza</h1>
                        
                    <ListGroup horizontal variant="flush">
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}} >
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Jardin exterior</Card.Title>
                                <Card.Text> Zona de cultivos y granja ecológica </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1"> Entra <span> </span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item >
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}}>
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Gimnasio</Card.Title>
                                <Card.Text> Espacio deportivo al aire libre para distintas disciplinas </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1"> Entra <span> </span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item className="maplist" style={{background: 'rgb(14, 51, 75, 0.5)'}}>
                            <Card style={{ width: '12rem', background: 'rgb(138, 192, 87, 0.9)'}} className="mapcard">
                                <Card.Body> 
                                <Card.Title className="maptitle"> Jardín botánico</Card.Title>
                                <Card.Text> Viveros aclimatados para la investigación de la fauna </Card.Text>
                                </Card.Body>
                                <Card.Footer> <button className="btnhome1"> Entra <span> </span>   </button> </Card.Footer>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
                </div> 
                <div >
                    <img className="mapimg" src={robot} alt="robot"></img>
                    <img className="mapimg1" src={band1} alt="band1"></img>
                    <img className="mapimg2" src={band2} alt="band2"></img>
                </div>
            </div>
        </div>
    )
}

export default Maps;