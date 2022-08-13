import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import * as mealService from "../../../services/mealService"


export const Delete = () => {
    let { mealId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        mealService.remove(mealId)
        .then(() => {
            navigate('/menu')
        })
        .catch(err => {
            console.log(err);
            navigate('/404')
        })
    })
    return null;
}