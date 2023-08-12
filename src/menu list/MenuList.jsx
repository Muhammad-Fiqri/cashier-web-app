import "./MenuList.scss";
import FoodBox from "./FoodBox";
import axios from "axios";
const api_url = "http://localhost/cashier%20app%20db/get_product.php";

import { useState, useEffect } from "react";
export default function MenuList() {
    const [product_data, setProduct_data] = useState([]);
    //get product data from website
    useEffect(() => {
        axios.get(api_url).then((response) => {
            let response_data = response.data;
            let is_connected = response_data.indexOf("Connected successfully,");
            //if is_connected == -1 the database is not connected
            if (is_connected == 0) {
                //take only the JSON from the response string
                let json_data = response.data.substring(response_data.indexOf(",") + 1);
                setProduct_data(JSON.parse(json_data));
            }
            else {
                alert("Database Can't Be Connect Pls Contact The Programmer: https://fiqri-portofolio.netlify.app");
            }
        });
    }, []);
    return (<div className="wrp-menu-list">
            {product_data.map((arr) => <FoodBox key={arr.product_id} product_data={arr}/>)}
        </div>);
}
