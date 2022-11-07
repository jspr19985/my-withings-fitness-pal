import './header.css';
import { noOfMonths } from "../utils/constants";

function Header() {
    return (
        <header className="header">
            <h1>Weight Loss: Last {noOfMonths} months...</h1>
        </header>
    );
}

export default Header;
