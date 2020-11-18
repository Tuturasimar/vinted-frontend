import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email && username && password) {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            username: username,
            email: email,
            password: password,
          }
        );

        if (response.data.token) {
          setUser(response.data.token);
          history.push("/");
        } else {
          alert("Une erreur est survenue");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setStatus(true);
    }
  };

  const history = useHistory();

  return (
    <>
      <div className="container">
        <div className="formulaire">
          <p>S'inscrire</p>
          <form className="forminput2" onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              placeholder="Nom d'utilisateur"
              onChange={(event) => {
                setUsername(event.target.value);
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
            <div className="newsletter">
              <div>
                <button></button>
                <span>S'inscrire à notre newsletter</span>
              </div>

              <p className="littletext">
                En m'inscrivant je confirme avoir lu et accepté les Termes &
                Conditions et Politique de Confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
            </div>
            <input type="submit" value="S'inscrire"></input>
            <Link className="link" to="/login">
              Tu as déjà un compte ? Connecte-toi !
            </Link>
          </form>
          {status && (
            <span className="alert" style={{ visibility: "visible" }}>
              Il faut remplir tous les champs.
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
