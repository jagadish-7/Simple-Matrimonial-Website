import React, { useState } from 'react'
import axios from 'axios'
import Reset from './Reset'



const Forget = () => {
    const [creds, setCreds] = useState({ email: "" })
    const [msg, setMsg] = useState("")
    const [myform, setForm] = useState(false)




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


            const { data } = await axios.post('http://localhost:5000/auth/email-send',
                document.querySelector('#my-form'), {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(data);

            if (data.success) {

                setForm(true)
                setMsg("Email send successfully");

                setTimeout(() => {


                    // window.location = "/reset-password";
                    // // props.showAlert("Successfully Logged In", "Success");
                    // navigate("/reset-password");
                    console.log("Success");
                }, 2000);
            }
            
            

        }

        catch (error) {

            setMsg("Email does't exits...")
        }


    }




    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    return (
        <>

        {!myform
        ?
        <div className="container login-container my-5">
            <div className="wrapper">
                <div className="title">
                    Forget Password
                </div>
                <form onSubmit={handleSubmit} id='my-form'>
                    <div className="send-otp">
                        <label>Email Address</label>
                        <input type="email" name='email' value={creds.email} onChange={onChange} required />
                    </div>
                    <div>{msg}</div>
                    <div className="field">
                        <input type="submit" value="Send Otp" />
                    </div>
                </form>
            </div>
        </div>: 
        
        <Reset email={creds.email}/>
}



        </>
    )
}

export default Forget