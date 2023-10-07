import React, { useState, useEffect } from 'react'
import Navbardash from './Navbardash'
import Navside from './Navside'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Myprofile = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/");
        window.location.reload();
    };





    const [user, setUser] = useState({ name: "", age: "", phone: "", caste: "", education: "", working: "", dob: "", state: "", email: "", image:"" });

    useEffect(() => {
        getUser()

    }, [])



    async function getUser() {
        try {
            const response = await axios.get('http://localhost:5000/auth/getuser', {
                mode: 'no-cors',
                headers: {
                    "auth-token": `${localStorage.getItem('token')}`
                }
            }).then((res) => {
                setUser({ name: res.data.name, age: res.data.age, phone: res.data.phone, email: res.data.email, education: res.data.education, working: res.data.working, caste: res.data.caste, state: res.data.state, image:res.data.image });
                console.log(res.data.image)

            }).catch(err => console.log(err))
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }


    //for uploading image
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };



    const handleImageUpload = async () => {
        if (!selectedImage) return;
        const formData = new FormData();
        formData.append('image', selectedImage);

        try {
            const response = await axios.post('http://localhost:5000/auth/uploadimage', formData, {
                headers: {
                    "auth-token": localStorage.getItem('token'),
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.data.success) {
                alert(response.data.message)
                localStorage.setItem('isUpload', 'true')
                window.location.reload()
            }
            console.log(response.data); // Log the server's response
        } catch (error) {
            console.error(error);
        }
    };










    return (
        <>
            <div className="container-scroller">
                <Navbardash />
                <div className="container-fluid page-body-wrapper">
                    <Navside handleLogout={handleLogout} />




                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-sm-12 mb-4 mb-xl-0">
                                    <h4 className="font-weight-bold text-dark">My Profile</h4>
                                    <p className="font-weight-normal mb-2 text-muted">Me</p>
                                </div>
                            </div>
                            <div className="row mt-3">

                                <div className="col col-lg-2">
                                <img src={`http://localhost:5000/${user.image}`} style={{ width: "230px"}} alt="User" />
                                    <input className='btn btn-sm my-2' type="file" accept="image/*" onChange={handleImageChange} />


                                    <button className='btn btn-sm btn-primary' onClick={handleImageUpload}>
                                        {localStorage.getItem('isUpload') === 'true' ? 'Update Image' : 'Upload Image'}
                                    </button>
                                </div>
                                <div className="col mx-5 px-5">
                                    <h2><strong>Name: </strong> {user.name}</h2>
                                    <p><strong>Age: </strong>{user.age}</p>
                                    <p><strong>Email: </strong>{user.email}</p>
                                    <p><strong>Phone: </strong>{user.phone}</p>
                                    <p><strong>Education: </strong>{user.education}</p>
                                    <p><strong>Working: </strong>{user.working}</p>
                                    <p><strong>Caste: </strong>{user.caste}</p>
                                    <p><strong>state: </strong>{user.state}</p>






                                </div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>
            <Footer />
        </>
    )
}

export default Myprofile