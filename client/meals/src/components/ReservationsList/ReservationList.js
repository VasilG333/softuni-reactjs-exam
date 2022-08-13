import { Reservation } from "./Reservation/Reservation";
import * as resService from "../../services/reservationsService"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const ReservationsList = () => {
    const [reservations, setReservations] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        resService.getAll()
            .then(res => {
                setReservations(Object.values(res))
                console.log(Object.values(res));
            })
            .catch(err => {
                console.log(err);
                navigate('/404')
            })
    }, [])
    return (
        <>
            {
                reservations && reservations.length > 0
                    ? reservations.map(x => <Reservation key={x._id} reservation={x} />)
                    : <h2>There are currently no reservations.</h2>
            }
        </>
    );
};