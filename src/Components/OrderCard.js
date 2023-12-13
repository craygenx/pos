import './OrderCard.css'

export default function OrderCard(){
    return (
        <div className="ordercrdCont">
            <div className="ocleft">
                <div className="itemNum">1</div>
                <div className="temName">Jack Daniels 500ml</div>
            </div>
            <div className="ocright">
                <div className="prc"><span>Ksh: </span>1200</div>
            </div>
        </div>
    )
}