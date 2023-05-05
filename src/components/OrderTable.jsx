import React from 'react'
import '../styles/product-list-style.css'

import EditIcon from '../images/NotePencil-d.svg'
import DeleteIcon from '../images/X-f.svg'
import CalendarIcon from '../images/CalendarBlank-r.svg'
import ProductListData from '../data/OrderListData'

export default function OrderTable() {
    return (
        <table className="order-table my-table" cellspacing="0">
            <tr className="table-row">
                <th className="table-header">Order ID</th>
                <th className="table-header">Description</th>
                <th className="table-header">Order Price</th>
                <th className="table-header">Order Created</th>
                <th className="table-header">Ordered by</th>
                <th className="table-header">Edit Order</th>
                <th className="table-header">Delete Order</th>
            </tr>
            {
                ProductListData.map(product => (
                    <tr className="table-row text-center">
                        <td className="table-cell text-center">
                            <p className="product-id text-center">{product.id}</p>
                        </td>
                        <td className="table-cell">
                            <p className="product-paragraph ">{product.description}</p>
                        </td>
                        <td className="table-cell">
                            <p htmlFor="retail price" className="product-price">EUR {product.retailprice}€</p>
                        </td>
                        <td className="table-cell">
                            <div className="date-centre">
                                <img className="calendar-icon" src={CalendarIcon} alt=""/>
                                <p className="created-date">{product.createdDate.toDateString()}</p>
                            </div>
                        </td>
                        <td className="table-cell">
                            <p className="created-by">{product.createdBy}</p>
                        </td>
                        <td className="table-cell">
                            <div className="edit-centre">
                                <div className="box-edit-bt">
                                    <img src={EditIcon} alt="" /><button className="edit-bt"
                                        type="submit" >Edit</button>
                                </div>
                            </div>
                        </td>
                        <td className="table-cell">
                            <div className="edit-centre">
                                <div className="box-delete-bt">
                                    <img src={DeleteIcon} alt=""/><button className="delete-bt"
                                        type="submit"  >Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </table >
    )
}
