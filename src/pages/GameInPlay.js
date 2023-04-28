import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

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
        <h1>Game in Progress...</h1>
            <label>Blue Team:</label> <span> </span>
                <input
                    value= {val}
                    onChange={(e) => setVal(e.target.value)}
                    className="mt-3"
                />
            <br/>
            <br />
            <label>Red Team:</label> <span> </span>  
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
             Add Total Score
            </Button>

        <br />
        <br />
        <h2>Scoring Breakdown</h2>
        <br />
        <Row>
            <Col> 
                <h3 style={{color: 'blue'}}><u>Blue Team</u></h3>
                    {
                        teamOneScores.map(x => x.toString()).join(" | ")
                    }
                <br/>
                <br/>
                <b>Total: 
                    {
                        teamOneScores.reduce(
                        (acc, x) => acc + x
                        , 0)
                } 
            <br/>
            </b>
            <br/>
                <Button
            variant="outline-primary"
            onClick={() => gameOver("Team 1")}    
        >
            Winner!
                </Button>
            </Col>
            <Col> 
                <h3 style={{color: 'red'}}><u>Red Team</u></h3>
                    {
                        teamTwoScores.map(x => x.toString()).join(" | ")
                    }
                <br/>
                <br/>
                <b>Total:
                    {
                        teamTwoScores.reduce(
                        (acc, x) => acc + x
                        , 0)
                    }
                </b>
                <br/>
                <br/>
                <Button
                    variant="outline-danger"
                    onClick={() => gameOver("Team 2")}
                >
                    Winner!
                </Button>
            </Col>
        </Row>
    </>
    )
};