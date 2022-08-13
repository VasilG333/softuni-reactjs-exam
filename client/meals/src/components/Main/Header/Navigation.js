import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from '../../../contexts/AuthContext';

export const Navigation = () => {
    const { user } = useAuthContext();
    const location = useLocation();
    const activeStyle = " active";
    const [selected, setSelected] = useState('/');
    const isSelected = (name) => {
        if (name === "/") {
            return activeStyle;
        } else {
            if (selected.includes(name)) {
                return activeStyle;
            }
            return "";
        }
    }
    useEffect(() => {
        setSelected(location.pathname)

    }, [location])
    return (
        <>
            <ul className="nav">
                <li className="scroll-to-section"  name="/" >
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="scroll-to-section"  name="about" >
                    <Link to="/about">About</Link>
                </li>
                <li className="scroll-to-section"  name="menu" >
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="scroll-to-section"  name="chefs">
                    <Link to="/chefs">Chefs</Link>
                </li>
                <li className="submenu">
                    <Link to={user.email ? "/reservations-list" : "/login"}>Staff Panel</Link>
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
                                    <Link to="/logout" >Logout</Link>
                                </li>
                            </div>
                            : <div id="guest">
                                <li>
                                    <Link to="/login" >Login</Link>
                                </li>
                            </div>
                        }
                    </ul>
                </li>
                <li className="scroll-to-section" name="make-reservation">
                    <Link to="/make-reservation">Make Reservation</Link>
                </li>
            </ul>
        </>
    );
};