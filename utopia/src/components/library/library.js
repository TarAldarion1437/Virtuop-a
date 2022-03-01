// normas renderizadas

import "../style/norms.css";


import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import { Helmet } from 'react-helmet'


const Library = () => {
    return(
        <div className="normshome">
            <Helmet title="Solarborg library" />
            <div className="normcontainer">
                <div>
                    <quote style={{ width: '4rem', background: 'rgb(138, 192, 87, 1)'}}> 
                    Esta es una biblioteca donde estará todo el material bibliográfico 
                    sobre el solarpunk 
                    </quote>
                </div>
                <div>
                    <Container>
                    <h1> <Badge bg="success">LITERATURA</Badge>  </h1>
                    <ListGroup>
                        <ListGroup.Item> Los desposeidos. Ursula K Le Guin</ListGroup.Item>
                        <ListGroup.Item> Pacific Edge Kim Stanley Robinson</ListGroup.Item>
                        <ListGroup.Item> Ecotopia Ernest Callenbach</ListGroup.Item>
                        <ListGroup.Item> The summer prince Alaya Dawn Johnson</ListGroup.Item>
                        <ListGroup.Item> Nicky Drayden</ListGroup.Item>
                        <ListGroup.Item> <a href="https://solarpunkmagazine.com">magazine de relatos solarpunk </a> </ListGroup.Item>
                        <ListGroup.Item> <a href="https://colombiailustrada.com.co/robotropico">comic colombiano </a> </ListGroup.Item>


                    </ListGroup>
                    </Container>
                </div>
                <div>
                    <Container>
                    <h1> <Badge bg="success">CINE</Badge>  </h1>
                    <ListGroup>
                        <ListGroup.Item> <a href="https://www.youtube.com/watch?v=z-Ng5ZvrDm4">Dear Alice </a> </ListGroup.Item>
                        <ListGroup.Item> <a href="https://www.youtube.com/watch?v=mRteflm8efE">Freedom project </a> </ListGroup.Item>
                        <ListGroup.Item> <a href="https://www.youtube.com/watch?v=8HZ4DnVfWYQ">Russian Farm </a> </ListGroup.Item>
                        <ListGroup.Item> Black panther </ListGroup.Item>
                        <ListGroup.Item> Tomorrowland </ListGroup.Item>
                        <ListGroup.Item> Elysium </ListGroup.Item>
                        <ListGroup.Item> El castillo en el cielo </ListGroup.Item>
                    </ListGroup>
                    </Container>
                </div>
                <div>
                    <Container>
                    <h1> <Badge bg="success">Estudios</Badge>  </h1>
                    <ListGroup>
                        <ListGroup.Item> Solarpunk: Ecologial and Fantastic Stories in a Sustainable world</ListGroup.Item>
                        <ListGroup.Item> Wings of Renewal: A Solarpunk Dragon Anthology</ListGroup.Item>
                        <ListGroup.Item> <a href="https://www.solarpedia.info/">La enciclopedia sustentable </a> </ListGroup.Item>

                    </ListGroup>
                    </Container>
                </div>
                <div>
                    <Container>
                    <h1> <Badge bg="success">Música</Badge>  </h1>
                    <ListGroup>
                        <ListGroup.Item> <a href="https://www.youtube.com/watch?v=sY-fEKq8BkY">solarpunk MIX </a> </ListGroup.Item>
                        <ListGroup.Item> <a href="https://www.youtube.com/watch?v=l0vrsO3_HpU">plantasia Mort Garson</a> </ListGroup.Item>
                    </ListGroup>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Library;
