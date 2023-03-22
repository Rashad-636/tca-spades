import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export const Homepage = () =>{

    const nav = useNavigate();

    return ( 
        <>
       
        <h1>Home page</h1>
        <Button
            variant="outline-primary"
            onClick={() => nav("/setup")}
            > Play! </Button>
            <Card
                className="mt-3 overflow-hidden"
            >
                <Card.Header>
                Leaderboard
                </Card.Header>
                <Card.Body>
                        <p>Play a game to see your leaderboard...</p>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>AVG</th>
                                    <th>Player</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>coming soon ..</td>
                                    <td>coming soon ..</td>
                                    <td>coming soon ..</td>
                                    <td>coming soon ..</td>
                                 </tr>          
                            </tbody>
                        </Table>                        
            
                </Card.Body>
            </Card>
        </>
    );
};