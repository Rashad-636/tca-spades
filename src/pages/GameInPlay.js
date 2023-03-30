import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState} from "react";

export const GameInPlay = () => {
    
    const nav = useNavigate();

    const gameOver = (won) => {
        nav(-2);
    };

///////////////////////////////////////////////

//testing
    const [val, setVal] = useState(0);
    const [valTwo, setValTwo] = useState(0);
    const [teamOneScores, setTeamOneScores] = useState([]);
    const [teamTwoScores, setTeamTwoScores] = useState([]);

    //testing
    const addTurnScore = () => {

        setTeamOneScores([
            ...teamOneScores
            , Number(val)
        ]);

        setTeamTwoScores([
            ...teamTwoScores
            , Number(valTwo)
        ]);

        setVal(0);
        setValTwo(0);

        // console.log("Team One " + val, "Team Two " + valTwo);
    };

////////////////////////////////////////////////
    
    return (
    <>
        <h2>Game In Play Page</h2>
            Team 1:<span> </span>  
                <input
                    value= {val}
                    onChange={(e) => setVal(e.target.value)}
                /> 
            <br/>
            <br/>
            Team 2:<span> </span>  
                <input
                    value= {valTwo}
                    onChange={(e) => setValTwo(e.target.value)}
                /> 
            <br/>
            <br/>
            <button 
            onClick= {() => addTurnScore()}
            >
             Add Turn Score 
            </button>
            <br/>
            <br/>
        <p>Team One Total: {
            teamOneScores.reduce(
                (acc, x) => acc + x
                , 0)
            }</p>
        <p>Team Two Total: {
            teamTwoScores.reduce(
                (acc, x) => acc + x
                , 0)
            }</p>
        <br/>

        <Button
            variant="outline-primary"
            onClick={() => gameOver(true)}    
        >
            Team 1 Won
        </Button>{' '}
        <Button
            variant="outline-danger"
            onClick={() => gameOver(true)}
        >
            Team 2 Won
        </Button>
    </>
    )
};