import '../../../css/form.css'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const FacultySignin = (props) => {
    
    let history=useHistory();
    const [credentials, setCredentials] = useState({ firstName:"",lastName:"",email: "", password: "" ,orgCode:""}); 
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/facultyregistration", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName:credentials.firstName,
            lastName:credentials.lastName,
            email: credentials.email,
            password: credentials.password,
            orgCode:credentials.orgCode
          }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          //redirect
          localStorage.setItem('token',json.authToken);
          history.push('/facultyHome');
          props.showAlert("Account created sucessfully",'success');
          
        }else{
          props.showAlert("invelid credential",'danger');
        }
      }; 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
          firstName
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.firstName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
          lastName
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.lastName}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="orgCode" className="form-label">
            OrgCode
          </label>
          <input
            type="text"
            className="form-control"
            id="orgCode"
            name="orgCode"
            onChange={onChange}
            value={credentials.orgCode}
            required
            minLength={5}
          />
        </div>
       

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default FacultySignin
