import React from 'react'
import userImage from '../dashboard/img/user.png'

const Navside = (props) => {
  return (
    <>
    
    
    

    <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="user-profile">
          <div className="user-image">

            <img src={userImage} alt='user' />

          </div>
          <div className="user-name">
            Sanika
          </div>

        </div>
        <ul className="nav text-center">

 

          <li className="nav-item text-center">
              <button onClick={props.handleLogout} className='btn btn-outline-secondary nav-link'>Logout</button>
          </li>



        </ul>

      </nav>
    
    
    </>
  )
}

export default Navside