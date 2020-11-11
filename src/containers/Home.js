import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const Home = ({ data }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="picture">
          <div className="offerbox">
            <h1>Prêts à faire du tri dans vos placards ?</h1>
            <Link to={"/offer"}>
              <button>Commencer à vendre</button>
            </Link>
          </div>
        </div>
        <div className="offers">
          {data.offers.map((offer, index) => {
            // console.log(offer);
            return (
              <Link to={`/offer/${offer._id}`} className="offer" key={index}>
                <div className="profile">
                  <img
                    alt="avatar"
                    src={`${offer.owner.account.avatar.url}`}
                  ></img>
                  <span>{offer.owner.account.username}</span>
                </div>
                <div className="article">
                  <img
                    alt="offer"
                    src={`${offer.product_image.secure_url}`}
                  ></img>

                  <div className="black">{offer.product_price} €</div>
                  <div className="grey">{offer.product_details[1].TAILLE}</div>
                  <div className="grey">{offer.product_details[0].MARQUE}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
