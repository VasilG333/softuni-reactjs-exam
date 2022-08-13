import "./ReservationDetails.css"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as resService from "../../../services/reservationsService"

export const ReservationsDetails = () => {
    const { resId } = useParams();
    const [res, setRes] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        resService.getOne(resId)
            .then(res => {
                setRes(res)
            })
            .catch(err => {
                console.log(err);
                navigate('/404')
            })
    }, [])

    const onDeleteClickHandler = (e) => {
        if(!window.confirm('Are you sure you want to delete this reservation?')) return;
        navigate(`/reservations-list/delete/${resId}`)
    }

    return (
        <div className="resdetails">
            {!!Object.keys(res).length
                ? <div class="reservation-resdiv">
                    <h3 class="resname">{res.name}, {res["number-guests"]} ppl</h3>
                    <ul>
                        <li>
                            Email: {res.email}
                        </li>
                        <li>
                            Phone: {res.phone}
                        </li>
                        <li>
                            Date: {res.date}
                        </li>
                        <li>
                            Time: {res.time}
                        </li>
                        <li>
                            Message: {res.message}
                        </li>
                    </ul>

                    <button className="reservationdel">
                        <Link to={`/reservations-list`} className="reservationdel-link">
                            Back
                        </Link>
                    </button>

                    <button className="reservationdel" onClick={onDeleteClickHandler}>
                            Delete
                    </button>
                </div>
                : <h2>There's no such reservation.</h2>}

        </div>
    );
};