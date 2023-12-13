import './SubTotal.css'

export default function SubTotal(){
    return (
        <div className="Subtotal_main">
            <div className="totals">
                <div className="totaltxt">
                    Total
                </div>
                <div className="price">ksh: 200</div>
            </div>
            <div className="buttons">
                <button id="hold">Open Tab</button>
                <button id="process">Process</button>
            </div>
        </div>
    )
}