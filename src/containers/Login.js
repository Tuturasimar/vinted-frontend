import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

const Login = ({ setUser }) => {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);

        history.push(location.state.fromPublish ? "/publish" : "/");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="formulaire">
        <p>Se connecter</p>
        <form className="forminput" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="Adresse email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="Se connecter"></input>
          <Link className="link" to="/signup">
            Pas encore de compte ? Inscris-toi !
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
