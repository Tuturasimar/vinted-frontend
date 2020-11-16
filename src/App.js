import React, { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Header from "./components/Header/Header";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Publish from "./containers/Publish";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  const [token, setToken] = useState("");

  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token);
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header token={token} setUser={setUser} />
        <Switch>
          <Route path="/offer/:id">
            <Offer></Offer>
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser}></Signup>
          </Route>
          <Route path="/login">
            <Login setUser={setUser}></Login>
          </Route>
          <Route path="/publish">
            <Publish token={token}></Publish>
          </Route>
          <Route path="/">
            <Home token={token}></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
