import { useState } from "react"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./forgetPassword.css"


const ForgetPassword=()=>{
    let [gmail,setGmail]= useState("");
    let navigate = useNavigate();
    
      
    
    const getVerification=async(event)=>{
        event.preventDefault();
        
       
        try {
            if(gmail === ""){
                console.log("gmail is required")
                swal({
                    text:"gmail is required",
                    icon:"warning",
                    dangerMode:true
                  })
               }
            
            let res=  await fetch("https://reset-backend.vercel.app/forget",{
            method:"PUT",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                gmail
            })
        });
        // let response = await res.json();
        // if(response.message === "Email sent"){
        //     swal(response.message);
        //     let code = prompt("Enter the verification Code","")
        //     if(code){
        //         let res = await fetch("https://reset-backend.vercel.app/verification",{
        //             method:"POST",
        //             headers:{
        //                 "content-Type": "application/json",
        //             },
        //             body:JSON.stringify({
        //                 gmail,
        //                 // verificationCode:code
        //             })
        //         })
        //         let response = await res.json();
        //         if(response.message ==="Success"){
        //             swal("Verification Completed!");
        //             navigate("/reset",{state:gmail})
        //         }
        //          }
        // }
       
        
        } catch (error) {
            console.log(error);
            swal({
                text:"Error Occuured",
                icon:"warning",
                dangerMode:true
              })
        }
      
   
    }
 

    const handlesubmit =(e)=>{
        e.preventDefault()
    }
  
    return(
        <div className="container-md forgetPage">
            <div className="card">
                <h3>Enter your Registered Mail.ID</h3>
                <form onSubmit={handlesubmit}>
                <label htmlFor="gmail">Gmail</label>
                <input
                type="email"
                id="gmail"
                name="gmail"
                value={gmail}
                onChange={(e)=>setGmail(e.target.value)}
                />
                
               
                </form>
                <a href="/reset"><button type="submit" onClick={(e)=>getVerification(e)}>Reset</button></a>
                
            </div>
        </div>
    )
}
export default ForgetPassword;