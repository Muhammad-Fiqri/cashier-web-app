import { useEffect } from "react";

export default function ProductBought(props) {

    return(
        <div className="product-bought">
            <div className="product-name">{props.data.product_name}</div>
            <div className="product-count">x {props.data.product_count}</div>
            <div className="product-price">{props.data.product_price}</div>
        </div>
    );
}