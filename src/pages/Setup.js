import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Setup = () => {

    const nav = useNavigate();
    
    return (
    <>
    <h2>Pick Your Team</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Team 1</Form.Label>
        <Form.Control type="text" placeholder="Player 1" className="mb-2" />
        <Form.Control type="text" placeholder="Player 2" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Team 2</Form.Label>
        <Form.Control type="text" placeholder="Player 3" className="mb-2"/>
        <Form.Control type="text" placeholder="Player 4" />
      </Form.Group>
      <Button
        type="submit"
        variant="success"
        onClick={() => nav("/GameInPlay")}>
        Start Game
      </Button>
    </Form>
    </>
    );
};