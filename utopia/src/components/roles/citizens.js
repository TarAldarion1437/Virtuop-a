//tabla de roles 
import '../style/roles.css'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const Citizens = () => {
    const [persons, setPersons] = useState([ 
        {
        user: 'PgRAcat', 
        id: 1, 
        compatibilidad: '96%', 
        subrol: 'boss', 
        disponible: 'si'
    },
    {
        user: 'SPhEcEnt', 
        id: 2, 
        compatibilidad: '81%', 
        subrol: 'grey hat', 
        disponible: 'si'
    },
    {
        user: 'sINdepTi', 
        id: 3, 
        compatibilidad: '16%', 
        subrol: 'agente de regulación cibernética', 
        disponible: 'si'
    },
    {
        user: 'TreSpHin', 
        id: 4, 
        compatibilidad: '30%', 
        subrol: 'facilitador de paz', 
        disponible: 'si'
    },
    {
        user: 'ThANdMis', 
        id: 5, 
        compatibilidad: '88%', 
        subrol: 'black hat', 
        disponible: 'si'
    },
    {
        user: 'EtIMiAny', 
        id: 6, 
        compatibilidad: '68%', 
        subrol: 'grey hat', 
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