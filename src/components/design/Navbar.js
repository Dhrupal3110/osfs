// import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  //use location hook for active or inactive links
  let location = useLocation();

  //use history hook to redirect
  let history=useHistory(null);
  // useEffect(() => {
  //   // console.log(location.pathname);
  // }, [location]);
  const handleLogOut=()=>{
    localStorage.removeItem('token');
    history.push('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            osfs
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link${
                    location.pathname === "/" ? " active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link${
                    location.pathname === "/about" ? " active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          {!localStorage.getItem("token")?
          <div className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">
              Signup
            </Link>
          </div>
          :
          <div className="d-flex">
            <Link className="btn btn-primary mx-1" to="/login" onClick={handleLogOut} role="button">
              LogOut
            </Link>
          </div>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
