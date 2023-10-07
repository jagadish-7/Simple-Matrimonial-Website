import React from 'react'

const Navbardash = () => {
  return (
        


        <>
        
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="/">Admin</a>
        <a className="navbar-brand brand-logo-mini" href="/">M</a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        {/* <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="icon-menu"></span>
        </button> */}
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Search" aria-label="search" aria-describedby="search"/>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">

          {/* <button className='nav-item btn btn-outline-primary' onClick={handleLogout}>Logout</button> */}
          
        </ul>
        {/* <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button> */}
      </div>
    </nav>


        
        
        </>
  )
}

export default Navbardash