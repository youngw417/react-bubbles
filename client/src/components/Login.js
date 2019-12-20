import React, { useState } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const initialState = {
  username: "",
  password: ""
};
const Login = props => {
  const [credentials, setCredentials] = useState(initialState);

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

  
      axios
        .post("http://localhost:5000/api/login", credentials)
        .then(res => {
          console.log("res", res);
          localStorage.setItem("token", res.data.payload);
          props.history.push("/bubbles");
          clearForm();
        })

        .catch(err => {
          console.log("err", err.response.data.error);
          // this.props.setAlert(err.response.data.error);
          clearForm();
          localStorage.removeItem("token");
        });

  };

  const clearForm = () => {
    setCredentials(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Welcome to the Bubble App!</h2>
        <input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {/* {this.isFetching && '   logging in .....'} */}
      </form>
    </>
  );
};

export default Login;
