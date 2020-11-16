import React, { useState, useEffect } from "react";
import axios from "axios";
import Noimg from "../assets/images/noimage.jpg";
import { useParams } from "react-router-dom";
const Offer = () => {
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
  const { id } = useParams();
  return (
    <>
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <div className="bigstuff">
          <div className="container">
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
                          {list.product_details.map((elem, index) => {
                            console.log(elem);
                            const keys = Object.keys(elem);
                            return (
                              <>
                                <p key={index}>
                                  <span className="grey2">{keys[0]}</span>
                                  <span className="black2">
                                    {elem[keys[0]]}
                                  </span>
                                </p>
                              </>
                            );
                          })}
                        </div>

                        <div className="product">
                          <p>{list.product_name}</p>
                          <p className="grey2">{list.product_description}</p>
                          <div className="avatar">
                            {list.owner.account.avatar ? (
                              <img
                                alt="avatar"
                                src={`${list.owner.account.avatar.secure_url}`}
                              ></img>
                            ) : (
                              <img alt="noimg" src={Noimg}></img>
                            )}

                            <span>{list.owner.account.username}</span>
                          </div>
                        </div>
                        <button className="achete">Acheter</button>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
