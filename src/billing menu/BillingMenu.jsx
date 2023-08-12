import "./BillingMenu.scss";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { useSelector, useDispatch } from "react-redux";
import { ClearBill } from "../redux store/billSlice";
import { useState, useEffect } from "react";
import ProductBought from "./ProductBought";
import CloseIcon from '@mui/icons-material/Close';
import $ from "jquery";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function BillingMenu() {
    const [bill,setBill] = useState([]);
    const [total,setTotal] = useState(0);
    const [change,setChange] = useState(0);
    const [payment_amount,setPayment_amount] = useState(0);
    const bill_data = (useSelector((state) => state.bill.value));
    const dispatch = useDispatch();

    useEffect(() => {
        setBill(bill_data);
    });

    useEffect(() => {
        console.log("Bill Updated");
        let price = bill.map((x) => parseInt(x.product_price));
        let count = bill.map((x) => parseInt(x.product_count));

        let total = 0;
        price.forEach(countTotal);
        function countTotal(value, index) {
            let price_after_count = value * count[index];
            total += price_after_count;
        }

        setTotal(total);
    }, [bill]);

    const saveBill = () => {
        $(".save-bill-popup").css("display","flex");
    };

    const chargeBill = () => {
        $(".charge-popup").css("display","grid");
    };

    const PayTheBill = () => {
        let change_amount = total - payment_amount;
        setChange(change_amount);
    }

    const clearSale = () => {
        dispatch(ClearBill());
    }

    //print bill use 2 package, html2canvas, jspsdf.
    const printBill = () => {
        console.log("Bill Printed");
        const component = document.getElementById("billing-component-to-print");
        html2canvas(component)
            .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData,'JPEG',0,0);
            pdf.save("download.pdf");
        });
    };

    const closeBillSavePopUp = () => {
        console.log("Bill Pop Up Close");
        $(".save-bill-popup").css("display","none");
    };

    const closeChargePopUp = () => {
        console.log("Bill Pop Up Close");
        $(".charge-popup").css("display","none");
    };

    return (
    <div className="wrp-billing">
            <div className="billing-box" id="billing-component-to-print">
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
                        {bill.map((product_data) => <ProductBought key={product_data.product_id} data={product_data}/>)}
                        <div className="sub-total">
                            <div className="sub-total-text">
                                Sub-Total:
                            </div>
                            <div className="sub-total-price">
                                Rp {total}
                            </div>
                        </div>
                        <div className="total">
                            <div className="total-text">
                                Total:
                            </div>
                            <div className="total-price">
                                Rp {total}
                            </div>
                        </div>
                    </div>
                    <div className="clear-sale">
                        <button onClick={clearSale}>Clear Sale</button>
                    </div>
                    <div className="white-space"></div>

                    <div className="save-or-print-bill">
                        <button onClick={saveBill}>Save Bill</button>
                        <button onClick={printBill}>Print Bill</button>
                    </div>

                    <div className="charge-bill">
                        <div className="split-bill">
                            <BrokenImageOutlinedIcon sx={{ color: "white" }}/>
                            <p>Split Bill</p>
                        </div>
                        <div className="charge-bill" onClick={chargeBill}>
                            <p>Charge Rp {total}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="save-bill-popup">
                <CloseIcon sx={{color: "white"}} onClick={closeBillSavePopUp}/>
                <p>Saved</p>
            </div>

            <div className="charge-popup">
                <CloseIcon sx={{color: "white"}} onClick={closeChargePopUp}/>
                <p>Total: Rp. {total}</p>
                <p>Insert Payment Amount:</p>
                <input type="number" name="payed" id="payed" value={payment_amount} onChange={(e) => setPayment_amount(e.target.value)}/>
                <p>Changes: Rp. {change}</p>
                <button onClick={PayTheBill}>OK</button>
            </div>
        </div>
        );
}
