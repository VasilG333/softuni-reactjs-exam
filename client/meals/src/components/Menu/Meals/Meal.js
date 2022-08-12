export const Meal = (props) => {
    console.log(props.meal);
    console.log(props.meal.name);
    return (
        <div className="tab-item">
            <img src={props.meal.imageUrl} alt="Image Missing" />
            <h4>{props.meal.name}</h4>
            <p>
                {props.meal.ingredients}
            </p>
            <div className="price">
                <h6>${props.meal.price}</h6>
            </div>
        </div>
    );
};