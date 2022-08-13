import { useNavigate, useParams } from "react-router-dom";
import * as resService from "../../services/reservationsService"

export const DeleteReservation = () => {
    const { resId } = useParams();
    const navigate = useNavigate();
    resService.remove(resId)
        .then(() => navigate('/reservations-list'))
        .catch(err => {
            console.log(err);
            navigate('/404')
        })
    return null;
}