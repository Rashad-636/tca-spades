import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Setup = () => {

    const nav = useNavigate();
    
    return (
    <>
    <h2>Setup Page</h2>
    <Button
        variant="success"
        onClick={() => nav("/GameInPlay")}
    >
        Start Game
    </Button>
    </>
    );
};