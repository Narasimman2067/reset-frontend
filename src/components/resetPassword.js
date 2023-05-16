import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const ResetPassword = () => {
  let location = useLocation();

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
        let res = await fetch("https://reset-backend.vercel.app/updatePassword", {
          method: "PUT",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            gmail: location.state,
            password: password,
          }),
        });
        let response = res.json()
        swal("Updated Successfully", "", "success");
        navigate("/welcome");
        console.log(response)
      } catch (error) {
        console.log(error);
        swal({
          text: "Error Occuured",
          icon: "warning",
          dangerMode: true,
        });
      }
    }
  };
  return (
    <div className="container-md " style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div className="card" style={{width:"50vw"}}>
        <h1>Create a new Password ...</h1>
        <label htmlFor="password">New Password</label>
        <form>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm New Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <button type="submit" onClick={(event) => handleSubmit(event)}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;