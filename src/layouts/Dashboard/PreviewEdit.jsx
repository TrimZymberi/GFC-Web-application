import React, { useEffect, useState } from "react";
import "../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from '../../axios';
import Swal from 'sweetalert2';

const PreviewEdit = () => {
    let { id } = useParams();

    const [inputErrorList, setInputErrorList] = useState({});
    const [preview, setPreview] = useState({
        name: '',
        description: '',
        image: '',
        user_id: '',
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        axiosClient
            .get(`/preview/${id}/edit`)
            .then((res) => {
                console.log(res.data);
                setPreview(res.data.preview);
                setLoading(false);
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        alert(error.response.data.message);
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data);
                    }
                }
                setLoading(false);
            });
    }, [id]);

    const handleInput = (event) => {
        event.persist();
        setPreview({ ...preview, [event.target.name]: event.target.value });
    };

    const updatePreview = (event) => {
        event.preventDefault();

        const data = {
            name: preview.name,
            description: preview.description,
            image: preview.image,
            user_id: preview.user_id,
        };

        axiosClient
            .put(`preview/${id}/`, data)
            .then((res) => {Swal.fire({
                icon: "success",
                text: res.data.message,
            }).then(
                ()=>{
                   navigate('../previewlist')
                }
              );
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.errors);
                    }
                    if (error.response.status === 404) {
                        alert(error.response.data.message);
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data);
                    }
                }
            });
    };

    if (Object.keys(preview).length === 0) {
        return (
            <div className="container m-5 text-center ">
                <h4>No such Preview Id Found</h4>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
                <title>GFC | Preview List</title>
                <div className="signup ">
                    <h2 className="mb-3 text-center">
                        Preview Edit
                        <Link
                            to="/previewlist"
                            className="btn btn-outline-danger float-end w-10"
                        >
                            {" "}
                            Back
                        </Link>
                    </h2>
                    <form onSubmit={updatePreview}>
                        <div className="form-group  mb-2">
                            <label htmlFor="PreviewName" className="form-label">
                                Preview image
                            </label>
                            <input
                                type="file"
                                name="image"
                                className="form-control"
                                placeholder="Upload an image"
                                onChange={handleInput} />
                            <div className="mt-2">
                                <span className="text-danger">{inputErrorList.image}</span>
                            </div>
                        </div>
                        <div className="form-group  mb-2">
                            <label htmlFor="PreviewName" className="form-label">
                                Preview name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter name"
                                value="Loading..."
                                onChange={handleInput}
                            ></input>
                            <span className="text-danger">{inputErrorList.name}</span>
                        </div>

                        <div className="form-group  mb-2">
                            <label htmlFor="Description" className="form-label">
                                Description
                            </label>
                            <input
                                type="textfield"
                                name="description"
                                className="form-control "
                                placeholder="Description"
                                value="Loading..."
                                onChange={handleInput}
                            ></input>
                            <span className="text-danger">{inputErrorList.description}</span>
                        </div>

                        <button type="submit" className="btn btn-danger w-100  mt-2">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
                <title>GFC | Preview List</title>
                <div className="signup ">
                    <h2 className="mb-3 text-center">
                        Preview Edit
                        <Link
                            to="/previewlist"
                            className="btn btn-outline-danger float-end w-10"
                        >
                            {" "}
                            Back
                        </Link>
                    </h2>
                    <form onSubmit={updatePreview}>
                    <div className="form-group  mb-2">
                            <label htmlFor="PreviewName" className="form-label">
                                Preview image
                            </label>
                            <input
                                type="file"
                                name="image"
                                className="form-control"
                                placeholder="Upload an image"
                                onChange={handleInput} />
                            <div className="mt-2">
                                <span className="text-danger">{inputErrorList.image}</span>
                            </div>
                        </div>
                        <div className="form-group  mb-2">
                            <label htmlFor="PreviewName" className="form-label">
                                Preview name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter name"
                                value={preview.name}
                                onChange={handleInput}
                            ></input>
                            <span className="text-danger">{inputErrorList.name}</span>
                        </div>

                        <div className="form-group  mb-2">
                            <label htmlFor="Description" className="form-label">
                                Preview Description
                            </label>
                            <textarea
                                name="description"
                                className="form-control "
                                placeholder="Description"
                                value={preview.description}
                                onChange={handleInput}
                            ></textarea>
                            <span className="text-danger mt-5">{inputErrorList.description}</span>
                        </div>


                        <button type="submit" className="btn btn-danger w-100  mt-2">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PreviewEdit;
