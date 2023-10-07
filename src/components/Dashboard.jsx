import React from 'react'
import Navbardash from './dashboard/Navbardash'
import Navside from './dashboard/Navside'
import Footer from './dashboard/Footer'
import ALLprofiles from './dashboard/ALLprofiles'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isUpload");

    
    navigate("/");
		window.location.reload();
	};

  

  return (
    <>
    
    <div className="container-scroller">
		<Navbardash/>
		<div className="container-fluid page-body-wrapper">
		<Navside handleLogout={handleLogout}/>
        <ALLprofiles/>
		</div>

		</div>
		<Footer/>
    
    </>
  )
}

export default Dashboard