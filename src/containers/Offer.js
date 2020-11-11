import React from "react";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
const Offer = ({ data }) => {
  const { id } = useParams();
  return (
    <div className="container">
      <Header />
      {data.offers.map((list, index) => {
        if (list._id === id) {
          return (
            <>
              <div className="bigbox">
                <img
                  alt="product"
                  src={`${list.product_image.secure_url}`}
                ></img>
                <div className="smallbox">
                  <p>{list.product_price} €</p>
                  <div className="detail">
                    <div>
                      <p>MARQUE</p>
                      <p>TAILLE</p>
                      <p>ÉTAT</p>
                      <p>COULEUR</p>
                      <p>EMPLACEMENT</p>
                    </div>
                    <div>
                      <p>{list.product_details[0].MARQUE}</p>
                      <p>{list.product_details[1].TAILLE}</p>
                      <p>{list.product_details[2].ÉTAT}</p>
                      <p>{list.product_details[3].COULEUR}</p>
                      <p>{list.product_details[4].EMPLACEMENT}</p>
                    </div>
                  </div>

                  <div className="product">
                    <p>{list.product_name}</p>
                    <p>{list.product_description}</p>
                    <div className="avatar">
                      <img
                        alt="avatar"
                        src={`${list.owner.account.avatar.secure_url}`}
                      ></img>
                      <span>{list.owner.account.username}</span>
                    </div>
                  </div>
                  <button>Acheter</button>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default Offer;
