import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import * as mealService from "../../services/mealService"
import { useEffect, useState } from "react";
import { Meal } from "../Meals/Meal";

export const Menu = (props) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('meal')
    const [queryMeals, setQueryMeals] = useState([]);

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        mealService.getAll()
            .then(res => {
                setMeals(Object.values(res));
            })
    }, []);

    useEffect(() => {
        setQueryMeals(meals.filter(x => x.type == query))
    }, [query]);

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
                            <article className="leaderboard">
                                <main className="leaderboard profiles">
                                    {meals && meals.length > 0
                                        ? query
                                            ? queryMeals.map(meal => <Meal key={meal._id} meal={meal} />)
                                            : meals.map(meal => <Meal key={meal._id} meal={meal} />)
                                        : <h1>There are no meals for today.</h1>}
                                </main>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};