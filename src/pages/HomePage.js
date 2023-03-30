import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const hardcodedGameResults = [
    {
        winner: "Tom"
        , players: ["Tom", "Taylor"]
        , score: 33
    }
    , {
        winner: "Taylor"
        , players: ["Jack", "Taylor"]
        , score: 23
    }
    , {
        winner: "Taylor"
        , players: ["Tom", "Taylor", "Jack"]
        , score: 53
    }
    , {
        winner: "Rashad"
        , players: ["Rashad", "Joe"]
        , score: 11
    }
    , {
        winner: "Rashad"
        , players: ["Rashad", "Joe"]
        , score: 31
    }
    , {
        winner: "Joe"
        , players: ["Rashad", "Joe"]
        , score: 14
    }
    , {
        winner: "Jack"
        , players: ["Rashad", "Joe", "Jack"]
        , score: 55
    }
];

    const getPreviousPlayers = (grs) => {

        const allPreviousPlayers = grs.flatMap(x => x.players);

        return [
            ...new Set(allPreviousPlayers)
        ].sort();
    };


    const calculateLeaderboard = (results) => {

        const gameResultsGroupedByPlayer = getPreviousPlayers(results).reduce(
            (acc, x) => acc.set(
                x
                , results.filter(y => y.players.includes(x))
            )
            , new Map()
        );

        return [...gameResultsGroupedByPlayer]
            // First object with names game counts and wins...
            .map(x => ({
                name: x[0]
                , totalGames: x[1].length
                , wins: x[1].filter(y => y.winner === x[0]).length
            }))
            /// Now use wins and total games to get avg and losses
            .map(x => ({
                name: x.name
                , wins: x.wins
                , losses: x.totalGames - x.wins
                , avg: x.wins / x.totalGames
            }))
            .sort(
                (a, b) => (a.avg * 1000 + a.wins + a.losses) > (b.avg * 1000 + b.wins + b.losses) ? -1 : 1
            )
            .map(x => ({
                ...x
                , avg: x.avg.toFixed(3)
            }))
            ;
    };
    
    const gameList = () => {
        
        const sortedGameResults = calculateLeaderboard(hardcodedGameResults).map((game) =>
            <tr>
                <td>{game.name}</td>
                <td>{game.wins} </td>
                <td>{game.losses}</td>
                <td>{game.avg}</td>
            </tr>
        );
            
        return (
            sortedGameResults
        )
    };



export const Homepage = () =>{

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
                                {gameList()} 
                            </tbody>
                        </Table>                        
            
                </Card.Body>
            </Card>
        </>
    );
};