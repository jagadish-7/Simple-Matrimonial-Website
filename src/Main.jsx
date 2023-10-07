import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbardash from './components/admin/Navbardash'
import Navside from './components/admin/Navside'
import Footer from './components/dashboard/Footer'
import AdminProfiles from './components/admin/AdminProfiles';




const Main = () => {


    const navigate = useNavigate();


    
    const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isUpload");

    
    navigate("/");
		window.location.reload();
	};




  return (
    <div>Admin


<div class="container-scroller">
		<Navbardash/>
		<div class="container-fluid page-body-wrapper">
		<Navside handleLogout={handleLogout}/>
        <AdminProfiles/>
		</div>

		</div>
		<Footer/>


    </div>
    
  )
}




export default Main