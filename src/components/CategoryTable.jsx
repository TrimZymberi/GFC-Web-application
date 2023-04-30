import React from 'react'
import '../styles/product-list-style.css'

import EditIcon from '../images/NotePencil-d.svg'
import DeleteIcon from '../images/X-f.svg'


export default function CategoryTable() {
    return (
        <table className="order-table my-table" cellspacing="0">
            <tr className="table-row">
                <th className="table-header">Preview</th>
                <th className="table-header">ID</th>
                <th className="table-header">Category Name</th>
                <th className="table-header">Description</th>
                <th className="table-header"> Price</th>
                <th className="table-header">Edit Category</th>
                <th className="table-header">Delete Category</th>
            </tr>
            {
                CategoryListData.map(category => (
                    <tr className="table-row">
                        <td className="table-cell">
                            <img className="category-image" src={category.imgpreview} alt="food-image" />
                        </td>
                        <td className="table-cell">
                            <p className="category-id">{category.id}</p>
                        </td>
                        <td className="table-cell">
                            <h1 c
                                lassName="category-header">{category.header}</h1>
                        </td>
                        <td className="table-cell">
                            <p className="category-paragraph">{category.description}</p>
                        </td>
                        <td className="table-cell">
                            <p htmlFor=" price" className="category-price">EUR {category.price}€</p>
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
