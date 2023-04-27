import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState} from "react";

export const GameInPlay = ({setupInfo, addGameresult}) => {

    console.log(setupInfo);
    
    const nav = useNavigate();

    const gameOver = (won) => {

        // saves games to cloud via email entered
        addGameresult({
            ...setupInfo
            , winningTeam: won
        });

        nav(-2);
    };

    // useState variables and functions
    const [val, setVal] = useState(0);
    const [valTwo, setValTwo] = useState(0);
    const [teamOneScores, setTeamOneScores] = useState([]);
    const [teamTwoScores, setTeamTwoScores] = useState([]);

    // function adds scores together for both teams after each turn once button is pressed
    const addTurnScore = () => {

        setTeamOneScores([
            ...teamOneScores
            , Number(val)
        ]);

        setTeamTwoScores([
            ...teamTwoScores
            , Number(valTwo)
        ]);

        // resets input value to zero for next turn/hand
        setVal(0);
        setValTwo(0);
    };
    
    return (
    <>
        <h1>Game in Progress</h1>
            Team Blue:<span> </span>  
                <input
                    value= {val}
                    onChange={(e) => setVal(e.target.value)}
                    className="mt-3"
                /> 
            <br/>
            <br/>
            Team Red:<span> </span>  
                <input
                    value= {valTwo}
                    onChange={(e) => setValTwo(e.target.value)}
                /> 
            <br/>
            <br/>
            <Button 
            variant="outline-success"
            onClick= {() => addTurnScore()}
            >
             Add Turn Score 
            </Button>
            <br/>
            <br/>
        <p><u><b>Blue Total</b></u>
        <br/>
            {
            teamOneScores.reduce(
                (acc, x) => acc + x
                , 0)
            }
        </p>
        <p><u><b>Red Total</b></u>
        <br/> 
            {
            teamTwoScores.reduce(
                (acc, x) => acc + x
                , 0)
            }
            <br />
        </p>

        <Button
            variant="outline-primary"
            onClick={() => gameOver("Team 1")}    
        >
            Team Blue Won
        </Button>{' '}
        <Button
            variant="outline-danger"
            onClick={() => gameOver("Team 2")}
        >
            Team Red Won
        </Button>
        <br />
        <br />
        <h3>Scores per hand</h3>
        Blue
        <br />
            {
                teamOneScores.map(x => x.toString()).join(" | ")
            }
        <br />
        <br />
        Red
        <br />
            {
                teamTwoScores.map(x => x.toString()).join(" | ")
            }
    </>
    )
};