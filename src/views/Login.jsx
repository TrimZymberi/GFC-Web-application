import React, { useState } from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios";

export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ email: "", password: "" });

    axiosClient
      .post("/login", {
        email,
        password
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        navigate('/');
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.errors) {
          const errors = error.response.data.errors;
          setError({
            email: errors.email ? errors.email.join("<br>") : "",
            password: errors.password ? errors.password.join("<br>") : "",
            other: errors.error ? errors.error.join("<br>") : "",
          });
        } else if (error.response && error.response.data && error.response.data.error) {
          setError({
            email: "",
            password: "",
            other: error.response.data.error,
          });
        } else {
          setError({ other: "An error occurred. Please try again later."});
        }
      });
  };


  return (
    <div className="wrapper d-flex  align-items-center justify-content-center">
      <div className="login">
        <h2 className="mb-3 text-center">Login </h2>
        <form onSubmit={onSubmit}>
          <div className="form-group  mb-2 ">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              name="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            {error.email && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.email }}></p>}
          </div>

          <div className="form-group  mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
              name="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            {error.password && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.password }}></p>}
          </div>

          {error.other && <p className="text-danger mt-2" dangerouslySetInnerHTML={{ __html: error.other }}></p>}


          <button type="submit" className="btn btn-danger w-100  mt-2">
            Login
          </button>

          <p className="text-secondary text-center mt-3">
            -- -- -- -- -- -- -- or -- -- -- -- -- -- --
          </p>

          <button type="button" className="btn w-100 btnGuest  mt-2">
            CONTINUE AS GUEST
          </button>

          <p className="text-center mt-2">
            New on Ordering App?{" "}
            <a href="/signup" className="text-danger">
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
