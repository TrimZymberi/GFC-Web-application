import React, {useEffect, useState} from "react";
import { Link, useParams  } from "react-router-dom";
import axios from "axios";


function UserEdit(){

    let { id } = useParams();
    


    const [loading, setLoading] = useState(true)
    const [inputErrorList, setInputErrorList] = useState({})
    const [user, setUser] =  useState({})

    useEffect(() => {
        
        axios.get(`http://localhost:8000/api/users/${id}/edit`).then(res => {
            console.log(res);
            setUser(res.data.user);
            setLoading(false);
        })
        .catch(function (error) {

            if(error.response){
                
                if(error.response.status === 404){
                    alert(error.response.data.message)
                    setLoading(false);
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false);
                }
            }
        });

        
    }, [id])

const handleInput = (e) => {
    e.persist();
    setUser({...user, [e.target.name]: e.target.value});
}

    const updateUser = (e) => {
        e.preventDefault();

        setLoading(true);
        const data = {
            name: user.name,
            email: user.email,
            phone: user.phone,
            course: user.course,
        }

        axios.put(`http://localhost:8000/api/users/${id}/edit`, data)
        .then(res => {

            alert(res.data.message);
            setLoading(false);
        })
        .catch(function (error) {

            if(error.response){
                
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
                    setLoading(false);
                }
                if(error.response.status === 404){
                    alert(error.response.data.message)
                    setLoading(false);
                }
                if(error.response.status === 500){
                    alert(error.response.data)
                    setLoading(false);
                }
            }
        });
    }

    if(loading){
        return(
            <Loading />
        )
    }

    if(Object.keys(user).length === 0){
        return(
            <div className="container">
                <h4>No Such User Id found</h4>
            </div>
        )
    }


    return(
        <div>
            <div className="container mt-5">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <h4>
              Edit Users 
              <Link to="/users" className="btn btn-danger float-end">
                Back
                </Link>
            </h4>
          </div>
          <div className="card-body">
            <form onSubmit={updateUser}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.name}</span>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.email}</span>

                </div>
                <div className="mb-3">
                    <label>Phone</label>
                    <input type="text" name="phone" value={user.phone} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.phone}</span>

                </div>
                <div className="mb-3">
                    <label>Course</label>
                    <input type="text" name="course" value={user.course} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.course}</span>

                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Update User</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default UserEdit;
