import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function UserList() {

    
    const [students, setStudents]  = useState([]);

    useEffect(() => {
        
        axios.get(`http://localhost:8000/api/students`).then(res => {
            console.log(res);
            setStudents(res.data.students);
           
        });

        
    }, [])

    const deleteStudent = (e, id) => {
      e.preventDefault();

      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleteing...";

      axios.delete(`http://localhost:8000/api/students/${id}/delete`)
      .then(res => {

          alert(res.data.message);
          thisClicked.closest("tr").remove();
      })
      .catch(function (error) {

          if(error.response){
              
             
              if(error.response.status === 404){
                  alert(error.response.data.message)
                  thisClicked.innerText = "Delete";
              }
              if(error.response.status === 500){
                  alert(error.response.data)
                  
              }
          }
      });
    }

    

    var studentDetails = "";
    studentDetails = students.map( (item, index) => {
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>

                <td>
                    <Link to={`/students/${item.id}/edit`} className="btn btn-success">Edit</Link>
                </td>
                <td>
                  
                    <button type="button" onClick={(e) => deleteStudent(e, item.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )

    });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <h4>
              Students List
              <Link to="/students/create" className="btn btn-primary float-end">Add Student</Link>
            </h4>
          </div>
          <div className="card-body">
            <table className="table tabel-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {studentDetails}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
