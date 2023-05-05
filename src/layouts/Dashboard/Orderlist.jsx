import React from 'react'
import '../../styles/product-list-style.css'
import NavbarDashboard from '../../components/NavbarDashboard';

import { Link } from 'react-router-dom';

import SearchIcon from '../../images/Search-s.svg'
import AddIcon from '../../images/Add-s.svg'
import AZIcon from '../../images/FunnelSimple-r.svg'
import ArrowUpDownIcon from '../../images/ArrowsDownUp-d.svg'
import ProductTable from '../../components/OrderTable'

function ProductList() {
    return (
        <div id="parent">
            <title>Order List</title>
            <NavbarDashboard />
            
            <div className="preferences">
                <div className="preferences-img"  style={{ width: "5rem" , height: "5rem"}}>
                    <Link to="/OrderRegister"> <img src={AddIcon} alt="" style={{ width: "3rem" , height: "2rem"}}/></Link>
                    <img style={{ width: "5rem" , height: "2rem"}} src={AZIcon} alt=""  />
                    <img style={{ width: "5rem" , height: "2rem"}} src={ArrowUpDownIcon} alt="" />
                </div>
                <div className="layout-search-inp"style={{ width: "14rem" , height: "2rem"}} >
                    <div className="search-input" style={{ width: "14rem" , height: "3rem"}}>
                        <button className="search-bt" type="submit" style={{ width: "5rem" , height: "2rem"}}>
                            <img src={SearchIcon} alt="" style={{ width: "3rem" , height: "2rem"}}/>
                        </button>
                        <input type="search" name="search" placeholder="Search Order" />
                    </div>
                </div>
            </div>
            <div className="order-list">
                <div className="order-tb">
                    <ProductTable />
                </div>
            </div>
        </div>
    )
}

export default ProductList