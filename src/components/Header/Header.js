import React from "react";
import Logo from "../../assets/images/logoVinted.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser }) => {
  return (
    <div className="header">
      <div className="container">
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
              className="deco"
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="boutonco">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="boutonco">Se connecter</button>
              </Link>
            </>
          )}
        </div>

        <Link to="/publish">
          <button className="bouton">Vends tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
