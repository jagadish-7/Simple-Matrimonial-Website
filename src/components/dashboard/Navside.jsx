import React, { useState, useEffect } from 'react';

import axios from 'axios';
import userImage from './img/user.png'


const Navside = (props) => {


  const [user, setUser] = useState("");




useEffect(() => {
  
  getUser();
},)


  async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/auth/getuser', {
        mode: 'no-cors',
        headers: {
          "auth-token": `${localStorage.getItem('token')}`
        }
      }).then((res) => {
        setUser(res.data.name);
      }).catch(err => console.log(err))
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }












  return (
    <>




      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="user-profile">
          <div className="user-image">

            <img src={userImage} alt='user' />

          </div>
          <div className="user-name">
            {user}
          </div>

        </div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              {/* <i className="icon-box menu-icon"></i> */}
              <span className="menu-title">My Profile</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/searchprofile">
              {/* <i className="icon-file menu-icon"></i> */}
              <span className="menu-title">Search Profiles</span>
            </a>
          </li>



          <li className="nav-item">
              <button onClick={props.handleLogout} className='btn btn-outline-secondary nav-link'>Logout</button>
          </li>



        </ul>

      </nav>





    </>
  )
}


export default Navside


