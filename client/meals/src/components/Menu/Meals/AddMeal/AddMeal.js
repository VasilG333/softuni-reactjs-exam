import "./AddMeal.css"
import * as mealService from "../../../../services/mealService"
import { useNavigate } from "react-router-dom";
export const AddMeal = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const mealData = Object.fromEntries(new FormData(e.target));
        mealService.create(mealData)
            .then(res => res.json())
            .catch(err => console.log(err));
        navigate("/menu")
    }
    return (
        <div className="formcss">
            <form id="addmeal_form" className="form_class" onSubmit={onSubmit} method="post">
                <div className="form_div">
                    <label>Meal name:</label>
                    <input className="field_class" name="name" type="text" placeholder="Meal name" />
                    <label>Ingredients:</label>
                    <input className="field_class" name="ingredients" type="text" placeholder="Ingredients" />
                    <label>Image link:</label>
                    <input className="field_class" name="imageUrl" type="text" placeholder="Image link" />
                    <label>Price:</label>
                    <input className="field_class" name="price" type="number" placeholder="Price" />
                    <select className="dropdown" name="type">
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    <button className="submit_class" type="submit" form="addmeal_form">Login</button>
                </div>
            </form>
        </div>
    )
}