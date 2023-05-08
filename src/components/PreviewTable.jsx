import React, { useEffect, useState } from 'react';
import axiosClient from '../axios';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PreviewTable() {
    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState([]);
    const [user, setUsers] = useState({});

    useEffect(() => {
        axiosClient.get('preview').then(res => {
            console.log(res.data);
            if (Array.isArray(res.data.preview)) {
                setPreview(res.data.preview);
            } else {
                setPreview([]);
            }
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!loading) {
            preview.forEach((item) => {
                axiosClient.get(`users/${item.user_id}/name`).then(res => {
                    const name = res.data.name;
                    setUsers(prevState => ({
                        ...prevState,
                        [item.user_id]: name
                    }));
                }).catch(error => {
                    console.error(error);
                });
            });
        }
    }, [loading, preview]);

    const deleteCategory = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting...';

        axiosClient
            .delete(`preview/${id}/delete`)
            .then((res) => {
                alert(res.data.message);
                thisClicked.closest('tr').remove();
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        alert(error.response.data.message);
                        thisClicked.innerText = 'Delete';
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data);
                    }
                }
            });
    }

    if (loading) {
        return (
            <div className="text-center container mt-3 p-5">
                <div className="spinner-border" role="status"></div>
                <span className="m-3">Loading... Please wait.</span>
            </div>
        );
    }

    const previewDetails = preview;

    return (
        <Table style={{ backgroundColor: 'white' }}>
            <thead>
                <tr className='text-muted' style={{ backgroundColor: '#ffff' }}>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th className='text-center'>Created Date</th>
                    <th className='text-center'>Created by</th>
                    <th className='text-center'>Edit</th>
                    <th className='text-center'>Delete</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                {previewDetails.map((item, index) => {
                    const createdDate = new Date(item.created_at);
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>
                                <img src={item.image} className='rounded' alt="Preview" style={{ width: '50px', height: '40px' }} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td className='text-center'>{createdDate.toDateString()}</td>
                            <td className='text-center'>{user[item.user_id]}</td>
                            <td className='text-center'>
                                <Link className="edit-btn" to={`/preview/${item.id}/edit`}>
                                    <Button variant="primary" className='edit-btn'>Edit
                                    </Button>
                                </Link>
                            </td>
                            <td className='text-center'>
                                <Button variant="danger" onClick={(e) => deleteCategory(e, item.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}
