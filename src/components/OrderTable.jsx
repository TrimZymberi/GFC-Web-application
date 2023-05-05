import React from 'react'
import '../styles/product-list-style.css'

import EditIcon from '../images/NotePencil-d.svg'
import DeleteIcon from '../images/X-f.svg'
import ProductListData from '../data/OrderListData'

export default function OrderTable() {
    return (
        <table className="order-table my-table" cellspacing="0">
            <tr className="table-row text-center">
                <th className="table-header">Order ID</th>
                <th className="table-header">Description</th>
                <th className="table-header">Order Price</th>
                <th className="table-header">Order Created</th>
                <th className="table-header">Ordered by</th>
                <th className="table-header">Address</th>
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
                        <td className="table-cell text-center">
                            <div className="date-centre">
                                <p className="created-date">{product.createdDate.toDateString()}</p>
                            </div>
                        </td>
                        <td className="table-cell">
                            <p className="created-by">{product.createdBy}</p>
                        </td>
                        <td className="table-cell">
                            <p className="created-by">{product.addres}</p>
                        </td>
                        <td className="table-cell">
                            <div className="edit-centre">
                                <div className="box-edit-bt" style={{ width: "5rem" , height: "3rem"}}>
                                    <img src={EditIcon} alt="" style={{ width: "2rem" , height: "2rem"}}/><button className="edit-bt"
                                        type="submit" >Edit</button>
                                </div>
                            </div>
                        </td>
                        <td className="table-cell">
                            <div className="edit-centre">
                                <div className="box-delete-bt" style={{ width: "5rem" , height: "3rem"}}>
                                    <img src={DeleteIcon} alt="" style={{ width: "1rem" , height: "2rem"}}/><button className="delete-bt"
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
