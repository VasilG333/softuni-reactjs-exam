import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <section className="section" id="offers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 text-center">
                        <div className="section-heading">
                            <h6>Klassy Week</h6>
                            <h2>This Week’s Special Meal Offers</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row" id="tabs">
                            <div className="col-lg-12">
                                <div className="heading-tabs">
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <ul>
                                                <li>
                                                    <Link to="#tabs-1">
                                                        <img src={require("../../styles/images/tab-icon-01.png")} alt="" />
                                                        Breakfast
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#tabs-2">
                                                        <img src={require("../../styles/images/tab-icon-02.png")} alt="" />
                                                        Lunch
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#tabs-3">
                                                        <img src={require("../../styles/images/tab-icon-03.png")} alt="" />
                                                        Dinner
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <section className="tabs-content">
                                    <article id="tabs-1">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="left-list">
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-01.png")} alt="" />
                                                                <h4>Fresh Chicken Salad</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$10.50</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-02.png")} alt="" />
                                                                <h4>Orange Juice</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$8.50</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-03.png")} alt="" />
                                                                <h4>Fruit Salad</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$9.90</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="right-list">
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-04.png")} alt="" />
                                                                <h4>Eggs Omelette</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$6.50</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-05.png")} alt="" />
                                                                <h4>Dollma Pire</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$5.00</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-06.png")} alt="" />
                                                                <h4>Omelette &amp; Cheese</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$4.10</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article id="tabs-2">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="left-list">
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-04.png")} alt="" />
                                                                <h4>Eggs Omelette</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$14</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-05.png")} alt="" />
                                                                <h4>Dollma Pire</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$18</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-06.png")} alt="" />
                                                                <h4>Omelette &amp; Cheese</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$22</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="right-list">
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-01.png")} alt="" />
                                                                <h4>Fresh Chicken Salad</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$10</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-02.png")} alt="" />
                                                                <h4>Orange Juice</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$20</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-03.png")} alt="" />
                                                                <h4>Fruit Salad</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$30</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article id="tabs-3">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="left-list">
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-05.png")} alt="" />
                                                                <h4>Eggs Omelette</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$14</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-03.png")} alt="" />
                                                                <h4>Orange Juice</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$18</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-02.png")} alt="" />
                                                                <h4>Fruit Salad</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$10</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="right-list">
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-06.png")} alt="" />
                                                                <h4>Fresh Chicken Salad</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$8.50</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-01.png")} alt="" />
                                                                <h4>Dollma Pire</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$9</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="tab-item">
                                                                <img src={require("../../styles/images/tab-item-04.png")} alt="" />
                                                                <h4>Omelette &amp; Cheese</h4>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur koit
                                                                    adipiscing elit, sed do.
                                                                </p>
                                                                <div className="price">
                                                                    <h6>$11</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};