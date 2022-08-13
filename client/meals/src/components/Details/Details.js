import "./Details.css"
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as mealService from "../../services/mealService"
import { useAuthContext } from '../../contexts/AuthContext';


export const Details = (props) => {
    const { user } = useAuthContext();
    const [meal, setMeal] = useState([]);
    const { mealId } = useParams();
    useEffect(() => {
        mealService.getOne(mealId)
            .then(res => {
                setMeal(res);
            })
    }, []);
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="left-text-content">
                            <div className="section-heading details">
                                <h6>{meal.type}</h6>
                                <h2>{meal.name}</h2>
                            </div>
                            <p>
                                {meal.ingredients}
                            </p>
                            <div className="row">
                                <div className="col-4price">
                                    <h3>{meal.price}$</h3>
                                </div>
                            </div>
                            {user.email ?
                                <div className="row">
                                    <Link to={`/meals/edit/${mealId}`}>
                                        <button className="editbtn">Edit</button>
                                    </Link>
                                    <Link to={`/meals/delete/${mealId}`}>
                                        <button className="deletebtn">Delete</button>
                                    </Link>
                                </div>
                                :<></>}

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12">
                        <div className="right-content">
                            <div className="thumbdetails">
                                <img src={meal.imageUrl} alt="Img missing..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};