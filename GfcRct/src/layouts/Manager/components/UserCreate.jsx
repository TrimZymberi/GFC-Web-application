import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function UserCreate(){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [inputErrorList, setInputErrorList] = useState({})
    const [student, setStudent] =  useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    })

const handleInput = (e) => {
    e.persist();
    setStudent({...student, [e.target.name]: e.target.value});
}

    const saveStudent = (e) => {
        e.preventDefault();

        setLoading(true);
        const data = {
            name: student.name,
            email: student.email,
            phone: student.phone,
            course: student.course,
        }

        axios.post(`http://localhost:8000/api/students1`, data)
        .then(res => {

            alert(res.data.message);
            navigate('/students');
            setLoading(false);
        })
        .catch(function (error) {

            if(error.response){
                
                if(error.response.status === 422){
                    setInputErrorList(error.response.data.errors)
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


    return(
        <div>
            <div className="container mt-5">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <h4>
              Add Students List
              <Link to="/students" className="btn btn-danger float-end">
                Back
                </Link>
            </h4>
          </div>
          <div className="card-body">
            <form onSubmit={saveStudent}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" value={student.name} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.name}</span>
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="text" name="email" value={student.email} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.email}</span>

                </div>
                <div className="mb-3">
                    <label>Phone</label>
                    <input type="text" name="phone" value={student.phone} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.phone}</span>

                </div>
                <div className="mb-3">
                    <label>Course</label>
                    <input type="text" name="course" value={student.course} onChange={handleInput} className="form-control" />
                    <span className="text-danger">{inputErrorList.course}</span>

                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save Student</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default UserCreate;
