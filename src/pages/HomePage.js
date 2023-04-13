import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export const Homepage = ({gameresults}) => {

    console.log(gameresults);

    const nav = useNavigate();

    return ( 
        <>
       
        <h2 className='m-3'>Home page</h2>
        <Button
            variant="outline-primary"
            onClick={() => nav("/setup")}
            > 
            Play! 
            </Button>
            <Card
                className="mt-3 overflow-hidden"
            >
                <Card.Header>
                    Leaderboard
                </Card.Header>
                <Card.Body>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>AVG</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </Table>                        
            
                </Card.Body>
            </Card>
        </>
    );
};