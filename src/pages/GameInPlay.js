import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Nav } from "react-bootstrap";

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

        // setTeamOneScores([
        //     ...teamOneScores
        //     , Number(val)
        // ]);

        // setTeamTwoScores([
        //     ...teamTwoScores
        //     , Number(valTwo)
        // ]);

        // // resets input value to zero for next turn/hand
        // setVal(0);
        // setValTwo(0);

        // Validation if/else statement for input score boxes
        if ((Number(val) && Number(valTwo)) | (val == 0 && valTwo == 0) | (val === 0 && Number(valTwo)) | ((Number(val) && valTwo == 0))) {

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

        } else {

            alert("Error! Only numbers are allowed");

        };
    };

    const back = () => {
        nav(-1)
    };

    const home = () => {
        nav(-2)
    };
    
    return (
    <>
        <Nav className="justify-content-between" activeKey="/home">
            <Nav.Item>
                <Nav.Link onClick={back}>Back</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={home}>Exit</Nav.Link>
            </Nav.Item>
        </Nav>
        <h2>Game in Progress...</h2>
            <label>Blue Team:</label> <span> </span>
                <input
                    placeholder="Enter score"
                    value= {val}
                    onChange={(e) => setVal(e.target.value)}
                    className="mt-3"
                />
            <br/>
            <br />
            <label>Red Team:</label> <span> </span>  
                <input
                    placeholder="Enter score"
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
                <h4 style={{color: 'blue'}}><u>Blue Team</u></h4>
                    {
                        teamOneScores.map(x => x.toString()).join(" | ")
                    }
                <br/>
                <br/>
                <b>Total: <span> </span> 
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
                <h4 style={{color: 'red'}}><u>Red Team</u></h4>
                    {
                        teamTwoScores.map(x => x.toString()).join(" | ")
                    }
                <br/>
                <br/>
                <b>Total: <span> </span>
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