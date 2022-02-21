import "./App.css";
import Navbar from "./components/design/Navbar";
import Alert from "./components/design/Alert";

import SignUp from "./components/authcomponent/SignUp"
import Login from "./components/authcomponent/Login"

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
        <Alert alert={alert}/>
        <div className="container">
        <Switch>
          {/* <Route exact path="/">
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route> */}
          <Route exact path="/login">
            {/* <Login showAlert={showAlert} /> */}
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <SignUp showAlert={showAlert} />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
