import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signup = ({ setToken }) => {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const history = useHistory();

  return (
    <>
      <div>
        <p></p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
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
          <div>
            <button></button>
            <span>S'inscrire à notre newsletter</span>
            <p>En m'inscrivant....</p>
          </div>
          <input
            type="submit"
            value="S'inscrire"
            onClick={async () => {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                {
                  username: username,
                  email: email,
                  password: password,
                }
              );
              setToken(response.data.token);
              history.push("/");
            }}
          ></input>
          <Link to="/login">Déjà inscrit ? Connecte toi</Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
