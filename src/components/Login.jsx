import React, { useState } from 'react'
import Navbar from './fcomponents/Navbar'
import Footer from './fcomponents/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import '../App.css';





const Login = () => {





    const [creds, setCreds] = useState({ email: "", password: "" })

    const navigate = useNavigate();



    // axios post request
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const { data } = await axios.post('http://localhost:5000/auth/login',
                document.querySelector('#my-form'), {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(data);

            if (data.success) {
                localStorage.setItem('token', data.authToken);
                window.location = "/";
                // props.showAlert("Successfully Logged In", "Success");
                navigate("/");
                console.log("Success");
            }
            else{
                alert(data.error)
            }


        }

        catch (error) {

            alert("Please check your database connection....");
        }


    }



   



    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }





    return (
        <>

            <Navbar />
            <div className="container login-container my-5">


                <div className="wrapper">
                    <div className="title">
                        Login Here
                    </div>
                    <form onSubmit={handleSubmit} id='my-form'>
                        <div className="field">
                            <label>Email Address</label>
                            <input id='email' type="email" name='email' value={creds.email} onChange={onChange} required />
                        </div>
                        <div className="field">
                            <label className='lab'>Password</label>
                            <input id='password' type="password" name='password' value={creds.password} onChange={onChange} required />
           
                        </div>
                        <div className="content">
                            <div className="pass-link">
                                <a href="/forget-password">Forgot password?</a>
                            </div>
                        </div>
                        <div className="field">
                            <input type="submit" value="Login" />
                        </div>
                        <div className="signup-link">
                            Not a member? <a href="/signup">Signup now</a>
                        </div>
                    </form>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Login