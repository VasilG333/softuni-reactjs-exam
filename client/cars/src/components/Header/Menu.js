import { Link } from "react-router-dom";

export const Menu = () => {
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
                {/* 
                      <li class="submenu">
                          <Link to="">Drop Down</Link>
                          <ul>
                              <li><Link to="#">Drop Down Page 1</Link></li>
                              <li><Link to="#">Drop Down Page 2</Link></li>
                              <li><Link to="#">Drop Down Page 3</Link></li>
                          </ul>
                      </li>
                  */}
                <li className="scroll-to-section">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="scroll-to-section">
                    <Link to="/chefs">Chefs</Link>
                </li>
                <li className="submenu">
                    <Link to="/features">Features</Link>
                    <ul>
                        <li>
                            <Link to="#">Features Page 1</Link>
                        </li>
                        <li>
                            <Link to="#">Features Page 2</Link>
                        </li>
                        <li>
                            <Link to="#">Features Page 3</Link>
                        </li>
                        <li>
                            <Link to="#">Features Page 4</Link>
                        </li>
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