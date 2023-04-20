import React from 'react'
import '../styles/product-list-style.css'

import EditIcon from '../images/NotePencil-d.svg'
import DeleteIcon from '../images/X-f.svg'
import CalendarIcon from '../images/CalendarBlank-r.svg'
import ProductListData from '../data/ProductListData'

export default function ProductTable() {
    return (
        <table className="order-table my-table" cellspacing="0">
            <tr className="table-row">
                <th className="table-header">Preview</th>
                <th className="table-header">ID</th>
                <th className="table-header">Product Name</th>
                <th className="table-header">Description</th>
                <th className="table-header">Retail Price</th>
                <th className="table-header">Market Price</th>
                <th className="table-header">Date Created</th>
                <th className="table-header">Created by</th>
                <th className="table-header">Category</th>
                <th className="table-header">Edit Product</th>
                <th className="table-header">Delete Product</th>
            </tr>
            {
                ProductListData.map(product => (
                    <tr className="table-row">
                        <td className="table-cell">
                            <img className="product-image" src={product.imgpreview} alt="food-image" />
                        </td>
                        <td className="table-cell">
                            <p className="product-id">{product.id}</p>
                        </td>
                        <td className="table-cell">
                            <h1 c
                                lassName="product-header">{product.header}</h1>
                        </td>
                        <td className="table-cell">
                            <p className="product-paragraph">{product.description}</p>
                        </td>
                        <td className="table-cell">
                            <p htmlFor="retail price" className="product-price">EUR {product.retailprice}€</p>
                        </td>
                        <td className="table-cell">
                            <p htmlFor="market price" className="product-price">EUR {product.marketprice}€</p>
                        </td>
                        <td className="table-cell">
                            <div className="date-centre">
                                <img className="calendar-icon" src={CalendarIcon} alt="" />
                                <p className="created-date">{product.createdDate.toDateString()}</p>
                            </div>
                        </td>
                        <td className="table-cell">
                            <p className="created-by">{product.createdBy}</p>
                        </td>
                        <td className="table-cell">
                            <div className="category-centre">
                                <p className="category">{product.category}</p>
                            </div>
                        </td>
                        <td className="table-cell">
                            <div className="edit-centre">
                                <div className="box-edit-bt">
                                    <img src={EditIcon} alt="" /><button className="edit-bt"
                                        type="submit">Edit</button>
                                </div>
                            </div>
                        </td>
                        <td className="table-cell">
                            <div className="edit-centre">
                                <div className="box-delete-bt">
                                    <img src={DeleteIcon} alt="" /><button className="delete-bt"
                                        type="submit">Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </table >
    )
}
