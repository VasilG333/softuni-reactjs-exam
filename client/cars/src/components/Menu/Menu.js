import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Breakfast } from "./Meals/Breakfast";
import { Dinner } from "./Meals/Dinner";
import { Lunch } from "./Meals/Lunch";

export const Menu = (props) => {
    const [searchParams] = useSearchParams();
    const meal = searchParams.get('meal')
    console.log(meal);
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
                                                    <Link to="/menu?meal=breakfast">
                                                        <img src={require("../../styles/images/tab-icon-01.png")} alt="" />
                                                        Breakfast
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/menu?meal=lunch">
                                                        <img src={require("../../styles/images/tab-icon-02.png")} alt="" />
                                                        Lunch
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/menu?meal=dinner">
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
                                    {meal == 'breakfast'
                                        ? <Breakfast />
                                        : meal == 'lunch'
                                            ? <Lunch />
                                            : meal == 'dinner'
                                                ? <Dinner />
                                                : <Breakfast />}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};