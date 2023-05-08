import React, { useState } from "react";
import "../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from '../../axios';
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect } from "react";

const PreviewRegister = () => {
    const { currentUser } = useStateContext();
    const navigate = useNavigate();
    const [inputErrorList, setInputErrorList] = useState({});
    const [preview, setPreview] = useState({
      name: '',
      description: '',
      image: '',
      user_id: '',
    });
  
    useEffect(() => {
      if (currentUser) {
        setPreview({ ...preview, user_id: currentUser.id });
      }
    }, [currentUser]);
  
    const handleInput = (event) => {
      event.persist();
      if (event.target.name === 'image') {
          setPreview({ ...preview, image: URL.createObjectURL(event.target.files[0]) });
      } else {
          setPreview({ ...preview, [event.target.name]: event.target.value });
      }
    };
  
    const addPreview = (event) => {
      event.preventDefault();
    
      const formData = new FormData();
      formData.append('name', preview.name);
      formData.append('description', preview.description);
      formData.append('image', preview.image);
      formData.append('user_id', preview.user_id);
    
      axiosClient
        .post(`/preview`, formData)
        .then((res) => {
          alert(res.data.message);
          navigate('../previewlist');
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              setInputErrorList(error.response.data.errors);
            }
            if (error.response.status === 500) {
              alert(error.response.data);
            }
          }
        });
    };
    
    return (
        <>
            <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
                <div className="signup ">
                    <h2 className="mb-3 text-center">
                        Preview Registration
                        <Link
                            to="/previewlist"
                            className="btn btn-outline-danger float-end w-10"
                        >
                            {" "}
                            Back
                        </Link>
                    </h2>
                    <form onSubmit={(event) => addPreview(event, currentUser ? currentUser.id : '')}>
                    <input type="hidden" name="user_id" value={currentUser ? currentUser.id : ''} />
                        <div className="form-group  mb-2">
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
                            />
                            <div className="mt-2">
                                <span className="text-danger mt-2">{inputErrorList.name}</span>
                            </div>
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

                        <button type="submit" className="btn btn-danger w-100 mt-2">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PreviewRegister;
