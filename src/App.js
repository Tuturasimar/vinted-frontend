import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Header from "./components/Header/Header";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [token, setToken] = useState("");
  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
  };

  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token);
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <Router>
          <Header token={token} setUser={setUser} />
          <Switch>
            <Route path="/offer/:id">
              <Offer data={data}></Offer>
            </Route>
            <Route path="/signup">
              <Signup setUser={setUser}></Signup>
            </Route>
            <Route path="/login">
              <Login setUser={setUser}></Login>
            </Route>
            <Route path="/">
              <Home data={data}></Home>
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
