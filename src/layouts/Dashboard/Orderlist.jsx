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
                <div className="preferences-img">
                    <Link to="/prodReg"> <img src={AddIcon} alt="" /></Link>
                    <img src={AZIcon} alt=""  />
                    <img src={ArrowUpDownIcon} alt="" />
                </div>
                <div className="layout-search-inp" >
                    <div className="search-input">
                        <button className="search-bt" type="submit">
                            <img src={SearchIcon} alt="" />
                        </button>
                        <input type="search" name="search" placeholder="Search product by name" />
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