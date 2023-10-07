import React, {useState} from 'react'
import axios from 'axios';

const Sendmail = (props) => {

    

    
    const {email, name, customer} = props;
    console.log(name)
    console.log(customer)
    const [msg, setMsg] = useState("");
    const [udetails, setUdetails] = useState({ subject:""});

    const onChange = (e) => {
        setUdetails({ ...udetails, [e.target.name]: e.target.value })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        
          try {
            const response = await axios.post('http://localhost:5000/auth/sendmail', {
                to:email,
                subject:udetails.subject,
                senderEmail: customer,
                senderName:name
            });

            if(response.data.success === false)
            {
              setMsg("Something Went Wrong, Please restart your serever OR Please check your internet connection....")
              setTimeout(() => {
                setMsg("")
              }, 4000);
            }
            else{

            
      
            console.log(response.data);
            setMsg("Message sent successfully!");
            setTimeout(() => {
              setMsg("")
            }, 4000);
          }

          } catch (error) {
            console.error(error);
            
            setMsg(error);
          }
            

    }





    


  return (
    <>


<div className="send-email row mx-2">
      <textarea name="subject" value={udetails.subject} onChange={onChange} placeholder='Type here....'  id="desc" cols="20" rows="4"></textarea>
    </div>
      <button className='btn btn-sm btn-info my-2 mx-2' onClick={handleSubmit}>Send Message</button>
      {msg}
    
    
    </>
  )
}

export default Sendmail