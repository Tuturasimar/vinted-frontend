import React from "react";
import Logo from "../../assets/images/logoVinted.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
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
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </div>
      <button className="bouton">Vends tes articles</button>
    </div>
  );
};

export default Header;
