import React,{ useState }from "react";
import "../styles/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import validation from "../Validation/Validation";


const Signup = () => {

const [values,setValues]=useState({
    username: " ",
    email: " ",
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
        <h2 className="mb-3 text-center">Sign up </h2>
        <form onSubmit={handleValidation}>
          <div className="form-group  mb-2 ">
            <label htmlFor="text" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              onChange={handleInput}
            ></input>
            {errors.username && <p className="text-danger">{errors.username}</p>}

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

          <div className="form-group  mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="check" className="form-check-label">
              I'm not a robot
            </label>
          </div>
          <button type="submit" className="btn btn-danger w-100  mt-2">
            Sign Up
          </button>
          <p className="text-center mt-2 mb-3">
            Already have an account?{" "}
            <a href="/login" className="text-danger">
              Login
            </a>
          </p>
          <p className="text-secondary text-center ">
            -- -- -- -- -- -- -- or -- -- -- -- -- -- --
          </p>
          <button type="button" className="btn btnGuest w-100   mt-2">
            CONTINUE AS GUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
