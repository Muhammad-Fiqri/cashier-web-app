import { useEffect, useState } from "react";

export default function FoodBox(props) {
    const [data, set_data] = useState("");
    useEffect(() => {
        set_data(props.product_data);
    });
    const AddToBill = () => {
        console.log(data);
    };
    return (<div className="food-box" onClick={AddToBill}>
            <div className="food-image"><img src="/cumi-goreng-tepung.jpg" alt="Cumi Tepung"/></div>
            <div className="food-name"><p>Cumi Goreng</p></div>
        </div>);
}
;
