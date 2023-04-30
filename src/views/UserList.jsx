import React from 'react'
import '../styles/user-list-style.css'

import { Link } from 'react-router-dom';

import SearchIcon from '../images/Search-s.svg'
import AddIcon from '../images/Add-s.svg'
import AZIcon from '../images/FunnelSimple-r.svg'
import ArrowUpDownIcon from '../images/ArrowsDownUp-d.svg'
import UserTable from '../components/UserTable'
import NavbarDashboard from '../components/NavbarDashboard'

export default function UserList() {
    return (

        <div id="parent">
            <title>GFC | Users List</title>

            <NavbarDashboard />

            <div className="preferences">
                <div className="preferences-img">
                    <Link to="/roles"> <img src={AddIcon} alt="" /> </Link>
                    <img src={AZIcon} alt="" />
                    <img src={ArrowUpDownIcon} alt="" />
                </div>

                <div className="layout-search-inp">
                    <div className="search-input">
                        <div className='search-ic'>
                            <button className="search-bt" type="submit">
                                <img src={SearchIcon} alt="" />
                            </button>
                        </div>
                        <div>
                            <input type="search" name="search" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-list">
                <div className="order-tb">
                    <UserTable />
                </div>
            </div>
        </div>

    )
}