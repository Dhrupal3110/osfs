import "./App.css";
import Navbar from "./components/design/Navbar";
import Alert from "./components/design/Alert";
//homepage of osfs
import Home from "./components/design/Home"
//home pages
import AdminHome from "./components/Admin/AdminHome";
import FacultyHome from "./components/faculty/FacultyHome";
import StuHome from "./components/student/StuHome";

//signup pages
import SignUp from "./components/authcomponent/SignUp";
import FacultySignin from "./components/authcomponent/diffrentSignin/FacultySignin";
import OrgSignin from "./components/authcomponent/diffrentSignin/OrgSignin";
import StuSignin from "./components/authcomponent/diffrentSignin/StuSignin";

//Login pages
import Login from "./components/authcomponent/Login";
import OrgLogin from "./components/authcomponent/diffrentLogin/OrgLogin";
import FacultyLogin from "./components/authcomponent/diffrentLogin/FacultyLogin";
import StuLogin from "./components/authcomponent/diffrentLogin/StuLogin";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            {/* home page route */}
            <Route exact path="/adminHome">
              <AdminHome />
            </Route>
            <Route exact path="/facultyHome">
              <FacultyHome />
            </Route>
            <Route exact path="/stuHome">
              <StuHome />
            </Route>
            {/* login page rout */}
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/orglogin">
              <OrgLogin showAlert={showAlert} />
            </Route>
            <Route exact path="/facultylogin">
              <FacultyLogin showAlert={showAlert} />
            </Route>
            <Route exact path="/stulogin">
              <StuLogin showAlert={showAlert} />
            </Route>
            {/* signup page route */}
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/orgSignup">
              <OrgSignin showAlert={showAlert} />
            </Route>
            <Route exact path="/facultySignup">
              <FacultySignin showAlert={showAlert} />
            </Route>
            <Route exact path="/stuSignup">
              <StuSignin showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    
    </>
  );
}

export default App;
