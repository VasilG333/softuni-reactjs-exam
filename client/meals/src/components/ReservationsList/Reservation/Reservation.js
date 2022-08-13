import { useNavigate } from "react-router-dom";
import "./Reservation.css"
export const Reservation = (props) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(`/reservations-list/${props.reservation._id}`)
    }
    return (
        <article className="reservation-art" onClick={onClickHandler}>
            <span className="reservation-name">{props.reservation.name}</span>
            <p className="reservation-line">Time: {props.reservation.time}</p>
            <p className="reservation-line">Date: {props.reservation.date}</p>
            <p className="reservation-line">Phone number: {props.reservation.phone}</p>
            <span className="reservation-ppl">{props.reservation["number-guests"]} ppl</span>
        </article>
    );
};
//onClick={detailsHandler}