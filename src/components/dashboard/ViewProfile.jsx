import React,{useState} from 'react'
import axios from 'axios'

const ViewProfile = (props) => {

    
    console.log(props.myId);


    const [user, setUser] = useState();

    async function getUser() {
        try {
          const response = await axios.get('http://localhost:5000/auth/getuserbyid', {
            mode: 'no-cors',
            headers: {
              "id": `${props.myId}`
            }
          }).then((res) => {
            setUser(res.data.name);
          }).catch(err => console.log(err))
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
    
    
    
    
    
    
    getUser();



    return (
        <>


            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                View Profile
            </button>

            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{user}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewProfile