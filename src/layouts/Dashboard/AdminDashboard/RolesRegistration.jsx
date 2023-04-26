import React,{ useState }from "react";
import "../../../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "../../../Validation/Validation";




const RolesRegistration = () => {

const [values,setValues]=useState({
    Name: " ",
    LastName: " ",
    Email:"",
    Role: "",
    password: "",
    confirm_password: ""
});
    const[errors,setErrors]=useState({});

    const handleInput= event =>{
        setValues({...values,[event.target.name]: [event.target.value]})
    }

    const handleValidation =(event)=>{
        event.preventDefault();
        setErrors(validation(values))
    }

  return (
    <div className="wrapper  d-flex  align-items-center justify-content-center mb-5">
      <div className="signup ">
        <h2 className="mb-3 text-center">Roles  </h2>
        <form onSubmit={handleValidation}>
          <div className="form-group  mb-2 ">
            <label htmlFor="text" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleInput}
            ></input>
            {errors.Name && <p className="text-danger">{errors.Name}</p>}

          </div>

          <div className="form-group  mb-2">
            <label htmlFor="text" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="text"
              className="form-control"
              placeholder="Enter your last name"
              onChange={handleInput}
            ></input>
            {errors.LastName && <p className="text-danger">{errors.LastName}</p>}

          </div>

          <div className="form-group mb-2 ">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleInput}
            ></input>
            {errors.email && <p className="text-danger">{errors.email}</p>}

          </div>

          

          <div className="form-group  mb-2">
            <label htmlFor="text" className="form-label">
              Role
            </label>
            <input
              type="text"
              name="Role"
              className="form-control"
              placeholder="What is your role"
              onChange={handleInput}
            ></input>
            {errors.Role && <p className="text-danger">{errors.Role}</p>}

          </div>

          <div className="form-group  mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleInput}
            ></input>
            {errors.password && <p className="text-danger">{errors.password}</p>}

          </div>
          <div className="form-group  mb-2">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              className="form-control "
              placeholder="Enter password"
              onChange={handleInput}
            ></input>
            {errors.confirm_password && <p className="text-danger">{errors.confirm_password}</p>}

          </div>
          <div className="form-group  mb-2">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <select id="disabledSelect" class="form-select">
              <option>Select your address</option>
            </select>
            <div className="invalid-feedback">Please select your address!</div>
          </div>

          <button type="submit" className="btn btn-danger w-100  mt-2">
            Register
          </button>
         
          

        </form>
      </div>
    </div>
  );
};

export default RolesRegistration;
