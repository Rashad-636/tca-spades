import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const getUniquePlayers = (results) => {
    return [
        ...new Set(
            results.flatMap(x => [
                x.playerOne
                , x.playerTwo
                , x.playerThree
                , x.playerFour
            ])
        )
    ];
};

const getLeaderboardData = (results) => {

    const winners = results.flatMap(x => {
        return x.winningTeam == "Team 1" ? [x.playerOne, x.playerTwo]: [x.playerThree, x.playerFour]
    });
    console.log(winners);

    const losers = results.flatMap(x => {
        return x.winningTeam == "Team 1" ? [x.playerThree, x.playerFour]: [x.playerOne, x.playerTwo]
    });
    console.log(losers);

    const winnersWithWinCount = winners.reduce(
        (acc, x) => acc.set(
            x
            , (acc.get(x) ?? 0) + 1 
        )
        , new Map()
    );
    console.log(winnersWithWinCount);

    const losersWithLossCount = losers.reduce(
        (acc, x) => acc.set(
            x
            , (acc.get(x) ?? 0) + 1 
        )
        , new Map()
    );
    console.log(losersWithLossCount);

    return getUniquePlayers(results).map(x => {
        const wins = winnersWithWinCount.get(x) ?? 0;
        const losses = losersWithLossCount.get(x) ?? 0;
        const avg = wins / (wins + losses);

        return {
            name: x
            , wins: wins
            , losses: losses 
            , avg: avg.toFixed(3)
        };
    }).sort(
        (a,b) => a.avg > b.avg ? -1: 1
    );
};

export const Homepage = ({gameresults, setEmailKeyInput, emailKeyInput, saveEmailKey}) => {

    console.log(gameresults);

    const nav = useNavigate();

    const totalGames = gameresults.length;

    // Modal States
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
        <Button className='mb-3' variant="warning" onClick={handleShow}>
            Player Account
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Enter Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text" 
                    placeholder="Enter Email"
                    value={emailKeyInput.charAt(0).toUpperCase() + emailKeyInput.slice(1)} // forces first letter to be capitalized
                    onChange={(e) => setEmailKeyInput(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveEmailKey}>
                    Save Email
                </Button>
            </Modal.Footer>
        </Modal>
       
        <Card className='mb-3'>
            <Card.Header>
                # of Games Played
            </Card.Header>
            <Card.Body>
                {totalGames}
            </Card.Body>
        </Card>
        <Button
            variant="success"
            onClick={() => nav("/setup")}
            className='mb-3'
            > 
            Start Game
        </Button>
        <Card
            className=" overflow-hidden"
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
                        {
                            getLeaderboardData(gameresults).map(x => 
                            <tr>
                                <td>{x.name}</td>
                                <td>{x.wins}</td> 
                                <td>{x.losses}</td>
                                <td>{x.avg}</td>  
                            </tr>)
                        }
                        </tbody>
                    </Table>                        
            </Card.Body>
        </Card>
        </>
    );
};