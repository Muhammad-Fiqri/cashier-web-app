import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { AddProductToBill } from "../redux store/billSlice.js";

export default function FoodBox(props) {
    const [data, set_data] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        set_data(props.product_data);
    }, []);

    const AddToBill = () => {
        dispatch(AddProductToBill({product_name : data.product_name, product_price : data.product_price}));
    };

    return (<div className="food-box" onClick={AddToBill}>
            <div className="food-image"><img src="/food icon.png" alt="Cumi Tepung"/></div>
            <div className="food-name"><p>{data.product_name}</p></div>
        </div>);
}
;
