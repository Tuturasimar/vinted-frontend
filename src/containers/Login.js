import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const history = useHistory();
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
          <input
            type="submit"
            value="Se connecter"
            onClick={async () => {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/login",
                {
                  email: email,
                  password: password,
                }
              );
              setUser(response.data.token);

              history.push("/");
            }}
          ></input>
          <Link className="link" to="/signup">
            Pas encore de compte ? Inscris-toi !
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
