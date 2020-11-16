import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Noimg from "../assets/images/noimage.jpg";
import axios from "axios";

const Home = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
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
        <>
          <div className="picture">
            <div className="container">
              <div className="offerbox">
                <h1>Prêts à faire du tri dans vos placards ?</h1>
                {token ? (
                  <Link to={"/publish"}>
                    <button>Commencer à vendre</button>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <button>Commencer à vendre</button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="offers">
              {data.offers.map((offer, index) => {
                // console.log(offer);
                return (
                  <Link
                    to={`/offer/${offer._id}`}
                    className="offer"
                    key={index}
                  >
                    <div className="profile">
                      {offer.owner.account.avatar === undefined ? (
                        <img alt="noimg" src={Noimg}></img>
                      ) : (
                        <img
                          alt="avatar"
                          src={`${offer.owner.account.avatar.url}`}
                        ></img>
                      )}

                      <span>{offer.owner.account.username}</span>
                    </div>
                    <div className="article">
                      <img
                        alt="offer"
                        src={`${offer.product_image.secure_url}`}
                      ></img>

                      <div className="black">{offer.product_price} €</div>
                      <div className="grey">
                        {offer.product_details[1].TAILLE}
                      </div>
                      <div className="grey">
                        {offer.product_details[0].MARQUE}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Home;
