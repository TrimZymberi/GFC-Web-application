import React, { useState } from 'react'
import PreviewTable from '../components/PreviewTable'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'
import axiosClient from '../axios';

export default function PreviewList() {
    // TODO:
    // const [searchQuery, setSearchQuery] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    // const handleSearch = () => {
    //     if (!searchQuery) return;

    //     axiosClient
    //         .get(`preview/search?query=${searchQuery}`)
    //         .then(response => {
    //             setSearchResults(response.data.previews);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };

    return (
        <div id="parent">
            <title>GFC | Preview List</title>

            <div className="preferences">
                <div className="preferences-img">
                    <Link to="/previewregister" className='createbtn'><i class="bi bi-plus fs-2 text-black"></i></Link>
                </div>
                {/* <div className="layout-search-inp">
                    <div className="search-input">
                        <button className="search-bt" type="submit" onClick={handleSearch}>
                            <i className="bi bi-search m-1"></i>
                            <input
                                className='px-1'
                                type="search"
                                name="search"
                                placeholder="Search product by name"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                        </button>
                    </div>
                </div> */}
            </div>
                  <PreviewTable />  
        </div>
    )
}
