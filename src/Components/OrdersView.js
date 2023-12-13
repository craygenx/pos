import './OrdersView.css'
import ItemCard from './ItemCard'
// import SelectedCard from './SelectedCard'
import Subtotal from './Subtotal'

export default function OrderMenu(){
    return (
        <div className="main">
        <div className="navigation">
            hey
        </div>
        <div className="mainContent">
            <div className="sideNav">Hell</div>
            <div className="menuCont">
                <div className="menuFilters">
                    <div className="filter">Order History</div>
                    <div className="filter">Open Orders</div>
                    <div className="filter">Closed Orders</div>
                </div>
                <div className="menuItems">
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </div>
            <div className="inventory">
                <div className="selectedItems">
                    {/* <SelectedCard/> */}
                </div>
                <div className="subs">
                    <Subtotal />
                </div>
            </div>
        </div>
    </div>
    )
}