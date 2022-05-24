import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";
function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState('Login Unsucessful');
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleApi = () => {
    console.log({ email, password });
    axios
      .post("http://localhost:5000/login", { email: email, password: password })
      .then((result) => {
        setUser(result.data.data.userType);
        setUserDetails(result.data.data);
        setMessage(result.data.message);
      })
      .catch((error) => {
        setMessage("Invalid Credentials")
      });
  };
  const Retry = () => {
    setMessage("");
  };
  if (message == "") {
    return (
      <div>
        <Header/>
        <div className="form">
          <input
            name="Email"
            value={email}
            placeholder="Email"
            onChange={handleEmail}
            type="email"
          />
          <input
            name="Password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
            type="password"
          />
          <button onClick={handleApi}>Login</button>
        </div>
        <p>
          Don't have an account?<Link to="/Register"> Register</Link>{" "}
        </p>
      </div>
    );
  } else if (message === "Logged In") {
    if (user == "Tester") {
      return <Navigate to={`/Tester/${userDetails._id}`} />;
    } else if (user === "Admin") {
      return <Navigate to="/Admin" />;
    } else if (user === "Developer") {
      return <Navigate to={`/Developer/${userDetails._id}`} />;
    }
  } else {
    return (
      <div>
        <div className="form">
          <h2>WRONG CREDENTIALS</h2>
          <button onClick={Retry}>Retry</button>
        </div>
      </div>
    );
  }
}

export default Loginform;
