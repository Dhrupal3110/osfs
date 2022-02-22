import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div
        className="d-flex"
        style={{
          margin: "auto",
          justifyContent: "center",
        }}
      >
        {/* for org Signup */}
        <div className="card mx-2 ">
          <div className="card-body">
            <h5 className="card-title">Orgenization Signup</h5>
            <Link to="/orgSignup" className="btn btn-primary">
              Org Signup
            </Link>
          </div>
        </div>

        {/* for faculty Signup */}
        <div className="card mx-2">
          <div className="card-body">
            <h5 className="card-title">Faculty Signup</h5>
            <Link to="/facultySignup" className="btn btn-primary">
              Faculty Signup
            </Link>
          </div>
        </div>

        {/* for student Signup */}
        <div className="card mx-2">
          <div className="card-body">
            <h5 className="card-title">Student Signup</h5>
            <Link to="/stuSignup" className="btn btn-primary">
              Student Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
