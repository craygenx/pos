import './OrderMenu.css'
import ItemCard from './ItemCard'
import SelectedCard from './SelectedCard'
import SubTotal from './SubTotal'
import Table from './OrdersTable'
export default function OrderMenu(){
    const tableData = [
        { orderId: 1, date: '2023-12-06', totalSale: 100 },
        { orderId: 2, date: '2023-12-07', totalSale: 150 },
    ];
    return (
        <div className="Ordermenu_main">
        <div className="navigation">
            <div className="titleSearchBar">
                <div className="companytitle">Domesha POS</div>
                <input type="text" name="search" id="search" placeholder="Search Menu..." />
            </div>
        </div>
        <div className="mainContent">
            <div className="sideNav">
            <div className="menuItemCont">
                <div className="menuIcon"><i class="fa-solid fa-bars"></i></div>
                <div className="menutabName">Menu</div>
            </div>
            <div className="menuItemCont">
                <div className="menuIcon"><i class="fa-regular fa-square-check"></i></div>
                <div className="menutabName">Orders</div>
            </div>
            <div className="menuItemCont">
                <div className="menuIcon"><i class="fa-solid fa-cash-register"></i></div>
                <div className="menutabName">Cashier</div>
            </div>
            </div>
            <div className="menuCont">
                <div className="menuFilters">
                    <div className="filter-active">Choma</div>
                    <div className="filter">Drinks</div>
                    <div className="filter">Choma</div>
                </div>
                <div className="menuItems">
                    <Table data={tableData} />
                    {/* <ItemCard/>
                    <ItemCard/>
                    <ItemCard/> */}
                </div>
            </div>
            <div className="inventory">
            <div className="inventoryHead">
                <div className="headLeft">
                    <div className="changeTblBtn">
                        <div className="changeIcon"><i class="fa-solid fa-group-arrows-rotate"></i></div>
                        <div className="changetxt">Change Table</div>
                    </div>
                </div>
                <div className="headRight">
                    <div className="clearInventoryBtn"><i class="fa-solid fa-rotate"></i></div>
                </div>
            </div>
                <div className="selectedItems">
                    <SelectedCard/>
                </div>
                <div className="subs">
                    <SubTotal/>
                    {/* <Subtotal /> */}
                </div>
            </div>
        </div>
    </div>
    )
}