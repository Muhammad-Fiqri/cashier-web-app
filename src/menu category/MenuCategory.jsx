import "./MenuCategory.scss";
import { useNavigate } from "react-router-dom";

export default function MenuCategory() {
    const navigate = useNavigate();
    const editProduct = () => {
        console.log("Routing");
        navigate("/EditProduct");
    };
    return (<div className="wrp-menu-category">
            <div className="category-box">
                <div className="category-image">
                    <p>Cu</p>
                </div>
                <div className="category-name">
                    <p>Cumi dan Kerang</p>
                </div>
            </div>
            <div className="category-box">
                <div className="category-image" onClick={editProduct}>
                    <p>+</p>
                </div>
                <div className="category-name">
                    <p>Edit Product</p>
                </div>
            </div>
        </div>);
}
