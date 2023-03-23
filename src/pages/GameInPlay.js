import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const GameInPlay = () => {
    
    const nav = useNavigate();
    
    return (
    <>
        <h2>Game In Play Page</h2>
        <p>Data collection coming soon ..</p>
        <Button
            variant="outline-primary"
            onClick={() => nav(-2)}    
        >
            Team 1 Won
        </Button>{' '}
        <Button
            variant="outline-danger"
            onClick={() => nav(-2)}
        >
            Team 2 Won
        </Button>
    </>
    )
};