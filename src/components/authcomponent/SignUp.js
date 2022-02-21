import React ,{ useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  let history=useHistory();
  const [credentials, setCredentials] = useState({ instiuteName:"",email: "", password: "" }); 
   const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/orgregistration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        instiuteName:credentials.instiuteName,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect
      localStorage.setItem('token',json.authToken);
      history.push('/');
      props.showAlert("Account created sucessfully",'success');
      
    }else{
      props.showAlert("invelid credential",'danger');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="instiuteName" className="form-label">
          instiuteName
          </label>
          <input
            type="text"
            className="form-control"
            id="instiuteName"
            name="instiuteName"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.name}
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
       

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
