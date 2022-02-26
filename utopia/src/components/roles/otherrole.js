//otros roles hechos en lista
import '../style/roles.css'
import ListGroup from 'react-bootstrap/ListGroup'

const Otherrole = () => {
    return(
        <div>
            <h1> Otros roles</h1>
            <ListGroup>
                <ListGroup.Item disabled> Otro rol #1 </ListGroup.Item>
                <ListGroup.Item disabled> Otro rol #2 </ListGroup.Item>
                <ListGroup.Item disabled> Otro rol #3 </ListGroup.Item>
                <ListGroup.Item disabled> Otro rol #5 </ListGroup.Item>
                <ListGroup.Item disabled> Otro rol #4 </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Otherrole;