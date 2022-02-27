import "../../css/homepage.css";
import React from "react";
import SignUp from "../authcomponent/SignUp"
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div >
        <div className="image">
            
        </div>
      <h1>Welcome....</h1>
      <div className="container">

        <SignUp/>
        <h6 className="my-4 login">Alredy Register? <Link className="link" to="/login">Go to login</Link></h6>
      </div>
    </div>
  );
};

export default Home;
