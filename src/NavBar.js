import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/GameInPlay">Game In Play</Link>
            </li>
        </ul>
    );
};