import React,{useState, useEffect} from 'react'
import Navbardash from './Navbardash'
import Navside from './Navside'
import Footer from './Footer'
import axios from 'axios'
import userImage from './img/user.png'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import UserProfile from './UserProfile';


const Searchprofile = () => {



    const navigate = useNavigate();
    const handleLogout = () => {
          localStorage.removeItem("token");
      
      navigate("/");
          window.location.reload();
      };
  
    
    const [allusers, setAllusers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/auth/getusers')
            .then(response => {
                setAllusers(response.data);
            })
            .catch(error => {
                console.error('Error fetching all users:', error);
            });
    }, []);



    const [selectedUser, setSelectedUser] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);




    const handleViewProfile = user => {
        setSelectedUser(user);
        setShowProfileModal(true);
    };

    const handleCloseProfileModal = () => {
        setSelectedUser(null);
        setShowProfileModal(false);
    };



    return (
        <>
            <div className="container-scroller">
                <Navbardash />
                <div className="container-fluid page-body-wrapper">
                    <Navside handleLogout={handleLogout}/>




                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-sm-12 mb-4 mb-xl-0">
                                    <h4 className="font-weight-bold text-dark">Search Profiles</h4>
                                    <p className="font-weight-normal mb-2 text-muted">search</p>
                                </div>
                            </div>
                            <div className="row">
                                <input type="search" name="search" id="search" placeholder='Search here' className='input-group-text'/>
                            </div>
                            <div className="row mt-3 my-3">

                                {allusers.map(all => (


                                    <div className="col my-3" key={all._id} style={{margin:"10px 30px", backgroundColor:"white", padding:"10px 30px"}}>
                                         <img className="card-img-top" style={{ width: "200px" }} src={`http://localhost:5000/${all.image}`} alt="Card cap" />

                                        <div>
                                            <p className='my-2'><strong>Name: </strong>{all.name}</p>
                                            <p className='my-2'><strong>Age: </strong> {all.age}</p>
                                            <p className='my-2'><strong>Contact Number: </strong> {all.phone}</p>

                                            <p className='my-2'><strong>Caste: </strong> {all.caste}</p>
                                            <p className='my-2'><strong>State: </strong> {all.state}</p>
                                            <p className='my-2'><strong>District: </strong> {all.district}</p>
                                            <p className='my-2'><strong>DOB: </strong> {all.dob}</p>

                                        </div>

                                        <button className="btn btn-info btn-sm" onClick={() => handleViewProfile(all)}>View</button>
                                    </div>
                                ))}



                            </div>

                        </div>

                    </div>




                    <Modal show={showProfileModal} onHide={handleCloseProfileModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && <UserProfile user={selectedUser} />}
                </Modal.Body>
            </Modal>

                </div>

            </div>
            <Footer />
        </>

    )
}

export default Searchprofile