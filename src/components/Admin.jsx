import React, { useState } from 'react'
import Footer from './fcomponents/Footer'
import Navbar from './fcomponents/Navbar'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Admin = () => {

    const [creds, setCreds] = useState({email: "", password: ""}) 

    const navigate = useNavigate();
  
  
  
    // axios post request
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        try {
          
       
          const {data} = await axios.post('http://localhost:5000/auth/adminlogin', 
          document.querySelector('#my-form'), {
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            }
          })
  
          console.log(data);
  
          if(data.success)
          {
            localStorage.setItem('token', data.authToken);
            window.location = "/admin";
            // props.showAlert("Successfully Logged In", "Success");
            navigate("/admin");
            console.log("Success");
          }
          else{
            alert(data.error)
          }
          
  
      } 
      
      catch (error) {
        
          alert("Invalid Credentials");
      }
  
        
      }
  
  
  
      const onChange = (e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
    }
  
  
  
  


  return (
    <>
    
    
    <Navbar />
            <div className="container login-container my-5">


                <div className="wrapper">
                    <div className="title">
                        Admin Login 
                    </div>
                    <form onSubmit={handleSubmit} id='my-form'>
                        <div className="field">
                            <label>Email Address</label>
                            <input type="email" name='email' value={creds.email} onChange={onChange} required />
                        </div>

                        <div className="field">
                            <label className='lab'>Password</label>
                            <input type="password" name="password" value={creds.password} onChange={onChange} required />
                        </div>
                        <div className="content">
                            <div className="pass-link">
                            </div>
                        </div>
                        <div className="field">
                            <input type="submit" value="Login" />
                        </div>
                        
                    </form>
                </div>
            </div>



            <Footer />
    
    </>
  )
}

export default Admin