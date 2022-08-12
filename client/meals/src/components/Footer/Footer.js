import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xs-12">
                        <div className="right-text-content">
                            <ul className="social-icons">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-linkedin" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="logo">
                            <Link to="index.html">
                                <img src="assets/images/white-logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div className="left-text-content">
                            <p>
                                © Copyright Klassy Cafe Co.
                                <br />
                                Design: TemplateMo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};