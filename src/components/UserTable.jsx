import React from 'react'
import UserData from '../data/UserData'
import '../styles/user-list-style.css'

import CalendarIcon from '../images/CalendarBlank-r.svg'
import EditIcon from '../images/NotePencil-d.svg'
import DeleteIcon from '../images/X-f.svg'
import OrdersIcon from '../images/NoteBlank-r.svg'

export default function UserTable() {
    return (
        <table className="order-table my-table" cellSpacing="0">
            <tr className="table-row">
                <th className="table-e-header">ID</th>
                <th className="table-e-header">Username</th>
                <th className="table-e-header">Email</th>
                <th className="table-e-header">Address</th>
                <th className="table-e-header">Date Created</th>
                <th className="table-e-header">User Role</th>
                <th className="table-e-header">Edit User</th>
                <th className="table-e-header">Delete User</th>
                <th className="table-e-header">Orders</th>
            </tr>


            {
                UserData.map(user => (

                    <tr key={user.id} className="table-row">
                        <td className="table-e-cell">
                            <p className="user-id">{user.id}</p>
                        </td>
                        <td className="table-e-cell">
                            <h1 className="user-username">{user.username}</h1>
                        </td>
                        <td className="table-e-cell">
                            <p className="user-email">{user.email}</p>
                        </td>
                        <td className="table-e-cell">
                            <p className="user-address">{user.address}</p>
                        </td>
                        <td className="table-e-cell">
                            <div className="date-centre">
                                <img className="calendar-icon" src={CalendarIcon} alt="" />
                                <p className="created-date">{user.date.toDateString()}</p>
                            </div>
                        </td>
                        <td className="table-e-cell">
                            <div className="role-centre">
                                <p htmlFor="retail price" className={`user-role-${user.role}`}>{user.role}</p>
                            </div>
                        </td>
                        <td className="table-e-cell">
                            <div className="edit-centre">
                                <div className="box-edit-bt">
                                    <img src={EditIcon} alt="" /><button className="edit-bt"
                                        type="submit">Edit</button>
                                </div>
                            </div>
                        </td>
                        <td className="table-e-cell">
                            <div className="edit-centre">
                                <div className="box-delete-bt">
                                    <img src={DeleteIcon} alt="" />
                                    <button className="delete-bt" type="submit">Delete</button>
                                </div>
                            </div>
                        </td>

                        <td className="table-e-cell">
                            <div className="edit-centre">
                                <div className="box-readorder-bt">
                                    <img src={OrdersIcon} alt="" /><button className="read-orders-bt"
                                        type="submit">Read orders</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
        </table>
    )
}
