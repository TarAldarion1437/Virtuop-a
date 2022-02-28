//otros roles hechos en lista
import '../style/roles.css'
import ListGroup from 'react-bootstrap/ListGroup'

const Otherrole = () => {
    return(
        <div>
            <h1 className="roleti"> Otros roles</h1>
            <ListGroup>
                <ListGroup.Item disabled> cuidador de la primera infancia </ListGroup.Item>
                <ListGroup.Item disabled> agente de cultura </ListGroup.Item>
                <ListGroup.Item disabled>  agente pedagógico </ListGroup.Item>
                <ListGroup.Item disabled> agente culinario </ListGroup.Item>
                <ListGroup.Item disabled> agente higiénico </ListGroup.Item>
                <ListGroup.Item disabled> agente agricultor </ListGroup.Item>
                <ListGroup.Item disabled>  agente sanador </ListGroup.Item>
                <ListGroup.Item disabled> agente crematorio </ListGroup.Item>
                <ListGroup.Item disabled> cuidador espacios verdes </ListGroup.Item>
                <ListGroup.Item disabled> agente de desastres hogareños </ListGroup.Item>
                <ListGroup.Item disabled> prevención de desastres </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Otherrole;