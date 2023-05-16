import { useState } from "react";
import {useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./login.css";



const SignUp = () => {
  let [userName, setUserName] = useState("");
  let [gmail, setGmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmPassword !== password) {
      return swal({
        text: "Both passwords should be same",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      try {
        let res = await fetch("https://reset-backend.vercel.app/signUp", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            gmail,
            password,
          }),
        });
        let response = await res.json();
        if (response.userName) {
          localStorage.setItem("userName", response.userName);
          swal("Successfully SignedUp", "", "success");
          navigate("/welcome");
        } else {
          swal({
            text: response.message,
            icon: "warning",
            dangerMode: true,
          });
        }
      } catch (error) {
        console.log(error);
        swal({
          text: "Error occured",
          icon: "warning",
          dangerMode: true,
        });
      }
    }
  };
  return (
    <div className="container-md loginPage">
      <div className="card col-lg-10">
        
        <form>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <br />
          <label htmlFor="gmail">Gmail</label>
          <input
            type="email"
            id="gmail"
            name="gmail"
            value={gmail}
            onChange={(event) => setGmail(event.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <br />
          <button type="submit" onClick={(event) => handleSubmit(event)}>
            Sign Up
          </button>
        </form>
        <br />
        <p>
          Already have an account?
          <span onClick={() => navigate("/")}> Log In</span>
        </p>
      </div>
    </div>
  );
};
export default SignUp;