import "./Meal.css"
import { useNavigate } from "react-router-dom";
export const Meal = (props) => {
    const navigate = useNavigate();
    const detailsHandler = () => {
        navigate(`/meals/details/${props.meal._id}`)
    }
    return (
        <article className="leaderboard profile" onClick={detailsHandler}>
            <img src={props.meal.imageUrl} alt="Evan Spiegel" className="leaderboard picture" />
            <span className="leaderboard name">{props.meal.name}</span>
            <span className="leaderboard value">{props.meal.price}<span>$</span></span>
        </article>
    );
};