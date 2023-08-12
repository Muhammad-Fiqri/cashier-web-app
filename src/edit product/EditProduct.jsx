import "./EditProduct.scss";
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export default function EditProduct() {
    const navigate = useNavigate();
    const ReturnToMain = () => {
        console.log("Routing");
        navigate("/");
    };
    return (<div className="EditProduct-wrp">
            <ArrowBackIcon className="Return-Icon" onClick={ReturnToMain}/>
            <h1>Edit Product</h1>
            <div className="option-tab">
                <div className="option-wrp">
                    <AddIcon className="Option-Icon"/>
                    <button>Add Product</button>
                </div>
                <div className="option-wrp">
                    <VisibilityIcon className="Option-Icon"/>
                    <button>See Product</button>
                </div>
                <div className="option-wrp">
                    <ChangeCircleIcon className="Option-Icon"/>
                    <button>Change Product</button>
                </div>
                <div className="option-wrp">
                    <RemoveCircleIcon className="Option-Icon"/>
                    <button>Remove Product</button>
                </div>
            </div>
        </div>);
}
