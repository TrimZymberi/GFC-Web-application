import React from 'react'
import '../styles/product-list-style.css'

import SearchIcon from '../images/Search-s.svg'
import AddIcon from '../images/Add-s.svg'
import AZIcon from '../images/FunnelSimple-r.svg'
import ArrowUpDownIcon from '../images/ArrowsDownUp-d.svg'
import ProductTable from '../components/ProductTable'

function ProductList() {
    return (
        <div id="parent">
            <div className="preferences">
                <div className="preferences-img">
                    <img src={AddIcon} alt="" />
                    <img src={AZIcon} alt="" />
                    <img src={ArrowUpDownIcon} alt="" />
                </div>
                <div className="layout-search-inp">
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