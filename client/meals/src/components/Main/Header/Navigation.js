import { Link } from "react-router-dom";
import { useAuthContext } from '../../../contexts/AuthContext';

export const Navigation = () => {
    const { user } = useAuthContext();
    const selectStyles = { menu: styles => ({ ...styles, zIndex: 999 }) };
    return (
        <>
            <ul className="nav">
                <li className="scroll-to-section">
                    <Link to="/" className="active">
                        Home
                    </Link>
                </li>
                <li className="scroll-to-section">
                    <Link to="/about">About</Link>
                </li>
                <li className="scroll-to-section">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="scroll-to-section">
                    <Link to="/chefs">Chefs</Link>
                </li>
                <li className="submenu" style={selectStyles}>
                    <Link to="/features">Staff Panel</Link>
                    <ul>
                        {user.email
                            ? <div id="staff" className="important-nav">
                                <li>
                                    <Link to="/meals/addmeal">Add meal</Link>
                                </li>
                                <li>
                                    <Link to="/reservations-list">Reservation List</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </div>
                            : <div id="guest">
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </div>
                        }
                    </ul>
                </li>
                <li className="scroll-to-section">
                    <Link to="/make-reservation">Make Reservation</Link>
                </li>
            </ul>
        </>
    );
};