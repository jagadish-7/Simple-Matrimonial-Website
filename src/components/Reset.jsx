import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




const Reset = (props) => {
    const [creds, setCreds] = useState({ otp: "" , password:""})
    const [msg, setMsg] = useState("")
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const { data } = await axios.post('http://localhost:5000/auth/otp-verify',
            {
                email: props.email,
                password: creds.password,
                otp: creds.otp
              }
            , {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(data);

            if (data.success) {


                setMsg("OTP verified");

                setTimeout(() => {

                    setMsg("Password Changed Successfully");

                    window.location = "/login";
                    // props.showAlert("Successfully Logged In", "Success");
                    navigate("/login");
                    console.log("Success");
                }, 2000);
            }
            
            

        }

        catch (error) {

            setMsg("Incorrect OTP, Please Enter valid OTP")
        }


    }




    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }


  return (
    <>

<div className="container login-container my-5">
                <div className="wrapper">
                    <div className="title">
                        Enter OTP
                    </div>
                    <form onSubmit={handleSubmit} id='my-form'>
                        <div className="send-otp">
                            <label>OTP</label>
                            <input type="number" name='otp' value={creds.otp} onChange={onChange} required />
                        </div>
                        <div className="send-otp">
                            <label>New Password</label>
                            <input type="password" name='password' value={creds.password} onChange={onChange} required />
                        </div>
                        <div>{msg}</div>
                        <div className="field">
                            <input type="submit" value="Change Password" />
                        </div>
                    </form>
                </div>
            </div>
    
    
    </>
  )
}

export default Reset