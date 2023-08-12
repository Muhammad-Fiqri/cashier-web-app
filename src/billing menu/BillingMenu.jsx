import "./BillingMenu.scss";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';

export default function BillingMenu() {
    return (<div className="wrp-billing">
            <div className="billing-box">
                <div className="customer-info">
                    <div className="customer-picture">
                        <AccountCircleOutlinedIcon sx={{ color: "#495da7" }}/>
                        <p>Customer</p>
                    </div>
                    <div className="customer-name">
                        <input type="text" name="customerName" id="customerNameInput" value={"New Customer"} readOnly/>
                    </div>
                    <div className="billing-list-icon">
                        <PointOfSaleIcon sx={{ color: "#495da7" }}/>
                        <p>Billing List</p>
                    </div>
                </div>
                <div className="billing-list">
                    <div className="dining-place">
                        <select name="dining-place" id="diningPlace">
                            <option value="dine_in">Dine In</option>
                            <option value="take_out">Take Out</option>
                        </select>
                        <ExpandMoreIcon sx={{ color: "#495da7" }}/>
                    </div>
                    <div className="order-info">
                        <div className="view-table-wrp">
                            <p>1</p>
                            <button type="button" name="view-table">View Table</button>
                        </div>
                        <div className="product-bought">
                            <div className="product-name">Cah Taoge</div>
                            <div className="product-count">x 2</div>
                            <div className="product-price">Rp 15.000</div>
                        </div>
                        <div className="sub-total">
                            <div className="sub-total-text">
                                Sub-Total:
                            </div>
                            <div className="sub-total-price">
                                Rp 30.000
                            </div>
                        </div>
                        <div className="total">
                            <div className="total-text">
                                Total:
                            </div>
                            <div className="total-price">
                                Rp 30.000
                            </div>
                        </div>
                    </div>
                    <div className="clear-sale">
                        <button>Clear Sale</button>
                    </div>
                    <div className="white-space"></div>

                    <div className="save-or-print-bill">
                        <button>Save Bill</button>
                        <button>Print Bill</button>
                    </div>

                    <div className="charge-bill">
                        <div className="split-bill">
                            <BrokenImageOutlinedIcon sx={{ color: "white" }}/>
                            <p>Split Bill</p>
                        </div>
                        <div className="charge-bill">
                            <p>Charge Rp 30.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
