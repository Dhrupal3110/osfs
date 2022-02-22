import React from "react";
import { Link } from "react-router-dom";

function Login() {
  // let history=useHistory()
  return (
    <>
    <div className="d-flex"style={{margin: "auto",
   
    justifyContent: "center"}}>
      {/* for org login */}
      <div className="card mx-2 " >
        
        <div className="card-body">
          <h5 className="card-title">Orgenization Login</h5> 
         <Link to="/orglogin" className="btn btn-primary">
            Org Login
          </Link>
        </div>
      </div>
       {/* for faculty login */}
       <div className="card mx-2" >
        <div className="card-body">
          <h5 className="card-title">Faculty Login</h5>
          <Link to="/facultylogin" className="btn btn-primary">
            Faculty Login
          </Link>
        </div>
      </div>
       {/* for student login */}
       <div className="card mx-2" >
        <div className="card-body">
          <h5 className="card-title">Student Login</h5>
          <Link to="/stulogin" className="btn btn-primary">
            Student Login
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
