import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <div id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="left-content">
                            <div className="inner-content">
                                <h4>KlassyCafe</h4>
                                <h6>THE BEST EXPERIENCE</h6>
                                <div className="main-white-button scroll-to-section">
                                    <Link to="/reservations">Make A Reservation</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="main-banner header-text">
                            <div className="Modern-Slider">
                                <div className="item">
                                    <div className="img-fill">
                                        <img src={require("../../../styles/images/slide-01.jpg")} alt="Img Missing" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};