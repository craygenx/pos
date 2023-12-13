import './Cashier.css'
import Keypad from './Keypad'
import OrderCard from './OrderCard'
import PaymentSwitch from './PaymentSwitch'

export default function Cashier(){
    return (
        <div className="cashierMain">
            <div className="orderBreakdown">
                <div className="breakdownTop">
                    <div className="backIcon"><i class="fas fa-arrow-left"></i></div>
                    <div className="backtxt">Back</div>
                </div>
                <div className="breakdwnBtm">
                    <div className="btmTop">
                        <div className="orderId">Order ID #14253</div>
                        <div className="servingWaiter">John Doe</div>
                    </div>
                    <div className="orditemscont">
                        <OrderCard/>
                        <OrderCard/>
                    </div>
                    <div className="btmfooter">
                    <div className="summaries">
                        <div className="credit">
                            <div className="credittxt">Credited Amount</div>
                            <div className="creditAmnt">Ksh: 0.00</div>
                        </div>
                        <div className="credit">
                            <div className="blncetxt">Balance</div>
                            <div className="blnceamnt">Ksh: 0.00</div>
                        </div>
                    </div>
                    <div className="confirmationBtn">
                        <button><i class="fa-regular fa-credit-card"></i> <span>Confirm Payment</span></button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="keypadss">
                <div class="miscinfo">
                    <div className="miscleft">
                        <div className="paybletxt">Payable Amount</div>
                        <div className="payableAmnt">Ksh: 300</div>
                    </div>
                    <div className="miscright">
                        <div className="dets">
                            <div className="ordid">Order Id #14253</div>
                            <div className="waiterName">John Doe</div>
                        </div>
                        <div className="del">
                            <div className="delIcon"><i class="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                </div>
                <div class="keypadmain">
                    <PaymentSwitch/>
                    <Keypad />
                </div>
            </div>
        </div>
    )
}