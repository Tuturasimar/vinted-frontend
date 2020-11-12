import React from "react";
import Logo from "../../assets/images/logoVinted.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" src={Logo}></img>
      </Link>
      <div className="bar">
        <FontAwesomeIcon className="icon" icon="search" />
        <input type="text" placeholder="Recherche des articles"></input>
      </div>

      <div className="boutons">
        {token ? (
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </>
        )}
      </div>
      <button className="bouton">Vends tes articles</button>
    </div>
  );
};

export default Header;
