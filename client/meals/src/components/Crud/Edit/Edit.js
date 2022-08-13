import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as mealService from "../../../services/mealService"

export const Edit = (props) => {
    let { mealId } = useParams();
    const [data, setData] = useState({
        name: "",
        ingredients: "",
        imageUrl: "",
        price: "",
        type: ""
    })
    const navigate = useNavigate();
    useEffect(() => {
        mealService.getOne(mealId)
            .then(res => {
                setData(res);
            })
    }, []);
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data.name);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const mealData = Object.fromEntries(new FormData(e.target));
        mealService.edit(mealId, mealData)
            .then(res => res.json())
            .catch(err => console.log(err));
        navigate("/menu");
    }
    return (
        <div className="formcss">
            <form id="addmeal_form" className="form_class" onChange={onChangeHandler} onSubmit={onSubmit} method="post">
                <div className="form_div">
                    <label>Meal name:</label>
                    <input className="field_class" name="name" value={data.name} type="text" placeholder="Meal name" />
                    <label>Ingredients:</label>
                    <input className="field_class" name="ingredients" value={data.ingredients} type="text" placeholder="Ingredients" />
                    <label>Image link:</label>
                    <input className="field_class" name="imageUrl" value={data.imageUrl} type="text" placeholder="Image link" />
                    <label>Price:</label>
                    <input className="field_class" name="price" value={data.price} type="number" placeholder="Price" />
                    <select className="dropdown" name="type" value={data.type}>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    <button className="submit_class" type="submit" form="addmeal_form">Edit</button>
                </div>
            </form>
        </div>
    );
};