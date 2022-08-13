import "./Meal.css"
import { useNavigate } from "react-router-dom";
export const Meal = (props) => {
    const navigate = useNavigate();
    const detailsHandler = () => {
        navigate(`/meals/details/${props.meal._id}`)
    }
    return (
        <>
            {/* <div className="tab-item">
                <img src={props.meal.imageUrl} alt="Image Missing" />
                <h4>{props.meal.name}</h4>
                <p>
                    {props.meal.ingredients}
                </p>
                <div className="price">
                    <h6>${props.meal.price}</h6>
                </div>
            </div> */}
            {/* <article className="leaderboard profile">
                <img src={props.meal.imageUrl} alt="Evan Spiegel" className="leaderboard picture" />
                <span className="leaderboard name">{props.meal.name}</span>
                <span className="leaderboard value">{props.meal.price}<span>$</span></span>
            </article> */}

                    <article className="leaderboard profile" onClick={detailsHandler}>
                        <img src={props.meal.imageUrl} alt="Evan Spiegel" className="leaderboard picture" />
                        <span className="leaderboard name">{props.meal.name}</span>
                        <span className="leaderboard value">{props.meal.price}<span>$</span></span>
                    </article>

        </>
    );
};