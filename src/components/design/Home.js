import "../../css/homepage.css";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div >
        <div className="image">
            
        </div>
      <h1>Welcome....</h1>
      <div className="container">

        <Link to="/signup" className="btn btn-primary btn1 my-2">
          Register
        </Link>
        <h6 className="mx-2">Alredy Register? <Link to="/login">Go to login</Link></h6>
      </div>
    </div>
  );
};

export default Home;
