import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Sendmail from '../dashboard/Sendmail';

const UserProfile = ({ user }) => {


  const [myuser, setMyUser] = useState({name:"", email:""});

  useEffect(() => {
      getUser();
  }, []);

  async function getUser() {
      try {
          const response = await axios.get('http://localhost:5000/auth/getuser', {
              headers: {
                  "auth-token":  localStorage.getItem('token')
              }
          });
          
          setMyUser({
              name: response.data.name,
              email: response.data.email
          });
          console.log(response)
      } catch (error) {
          console.error(error);
      }
  }


  return (
    <>
    <div className='d-flex2'>
      <div className='mx-2'>
        <img src={`http://localhost:5000/${user.image}`} style={{width:"300px", borderRadius:"10px"}} alt="User" />
      </div>
      <div className='mx-2 my-4 d-flex'>
        <div className="left">
        <h3 style={{margin:"0", marginBottom:"3px", fontSize:"25px"}}><b style={{color:"brown"}}>{user.name}</b></h3>
        <p style={{color:"blue" ,margin:"0", marginBottom:"3px"}}>{user.state} - {user.district}</p>
        <p style={{margin:"0", marginBottom:"3px"}}><b style={{color:"black" ,}}>Gender: </b> {user.gender}</p>
        <p style={{margin:"0", marginBottom:"3px"}}><b style={{color:"black" ,}}>Education: </b> {user.education}</p>
        <p style={{margin:"0", marginBottom:"3px"}}><b style={{color:"black" ,}}>Working In: </b> {user.working}</p>
        <p style={{margin:"0", marginBottom:"3px"}}><b style={{color:"black" ,}}>Email: </b> {user.email}</p>
        <p style={{margin:"0", marginBottom:"3px"}}><b style={{color:"black" ,}}>Mobile Number: </b> {user.phone}</p>



        </div>


      <div className="right mx-4">
      <p style={{margin:"0", marginBottom:"2px"}}><b style={{color:"black"}}>Age:</b> {user.age}</p>
      <p style={{margin:"0", marginBottom:"2px"}}><b style={{color:"black"}}>Caste:</b> {user.caste}</p>
      <p style={{margin:"0", marginBottom:"2px"}}><b style={{color:"black"}}>DOB:</b> {user.dob}</p>
      <p style={{margin:"0", marginBottom:"2px"}}><b style={{color:"black"}}>Height:</b> {user.height} inch</p>
      <p style={{margin:"0", marginBottom:"2px"}}><b style={{color:"black"}}>Weight:</b> {user.weight} kG</p>



      </div>
   
      

      </div>
    </div>
    <div className="desc my-2 px-2">
      <h3 style={{margin:"0", marginBottom:"2px", fontWeight:"400", fontSize:"23px"}}><b style={{color:"black"}}>Contact</b></h3>
    <p style={{margin:"0", marginBottom:"2px"}}>{user.about}</p>
        
    </div>


      <Sendmail email={user.email} name = {myuser.name} customer={myuser.email} />
 </>

  );
};

export default UserProfile;
