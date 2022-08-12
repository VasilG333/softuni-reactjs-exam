import { Link } from "react-router-dom";
import { useAuthContext } from '../../contexts/AuthContext';

export const Navigation = () => {
    const { user } = useAuthContext();
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
                    <Link to="/menu?meals=breakfast">Menu</Link>
                </li>
                <li className="scroll-to-section">
                    <Link to="/chefs">Chefs</Link>
                </li>
                <li className="submenu">
                    <Link to="/features">Staff Panel</Link>
                    <ul>
                        {user.email
                            ? <div id="staff">
                                <li>
                                    <Link to="/meals/edit">Edit Meals</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Waiting for idea</Link>
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
                {/* <li class=""><Link rel="sponsored" to="https://templatemo.com" target="_blank">External URL</Link></li> */}
                <li className="scroll-to-section">
                    <Link to="/reservations">Contact Us</Link>
                </li>
            </ul>
        </>
    );
};