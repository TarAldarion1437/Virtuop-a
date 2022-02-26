//tabla de roles 
import '../style/roles.css'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const Citizens = () => {
    const [persons, setPersons] = useState([ 
        {
        user: 1, 
        id: 1, 
        compatibilidad: '96%', 
        subrol: 'admin', 
        disponible: 'si'
    },
    {
        user: 2, 
        id: 2, 
        compatibilidad: '16%', 
        subrol: 'admin', 
        disponible: 'si'
    },
    {
        user: 3, 
        id: 3, 
        compatibilidad: '93%', 
        subrol: 'admin', 
        disponible: 'si'
    },
    {
        user: 4, 
        id: 4, 
        compatibilidad: '86%', 
        subrol: 'admin', 
        disponible: 'no'
    }
    ])
    
    
    return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User #</th>
                        <th> ID </th>
                        <th> compatibilidad </th>
                        <th> subrol  </th>
                        <th> ¿Disponible? </th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person => {
                        return (
                            <tr>
                                <th> {person.user} </th>
                                <th> {person.id} </th>
                                <th> {person.compatibilidad} </th>
                                <th> {person.subrol} </th>
                                <th> {person.disponible} </th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    )
}

export default Citizens;