
export const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="left-text-content">
                            <div className="section-heading">
                                <h6>About Us</h6>
                                <h2>We Leave A Delicious Memory For You</h2>
                            </div>
                            <p>
                                We welcome you to sit back, unwind and appreciate the lovely sights and
                                hints of the ocean while our best gourmet expert sets you up a scrumptious
                                dinner utilizing the best and freshest ingredients. Klassy's legacy comes
                                from the parent Restaurant which was built up in 1990.
                                <br />
                                <br />
                                Klassy Cafe was worked for people in general and has advanced into 
                                a combination between exquisite chic and contemporary fine charge.
                                Enjoy our dazzling dishes and make the most of your eating background with us!
                            </p>
                            <div className="row">
                                <div className="col-4">
                                    <img src={require("../../styles/images/about-thumb-01.jpg")} alt="Img missing..." />
                                </div>
                                <div className="col-4">
                                    <img src={require("../../styles/images/about-thumb-02.jpg")} alt="Img missing..." />
                                </div>
                                <div className="col-4">
                                    <img src={require("../../styles/images/about-thumb-03.jpg")} alt="Img missing..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="right-content">
                            <div className="thumb">
                                <img src={require("../../styles/images/about-video-bg.jpg")} alt="Img missing..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};