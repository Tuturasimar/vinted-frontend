import React, { useState } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();
  const [pic, setPic] = useState();

  const history = useHistory();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("picture", picture);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      formData,
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    history.push("/");
  };
  if (token) {
    return (
      <div className="bigstuff">
        <div className="container">
          <div className="publish">
            <h2>Vends ton article</h2>

            <form className="boxpublish" onSubmit={handleSubmit}>
              <div className="whitebox">
                <div
                  className="dot_box"
                  style={picture && { justifyContent: "flex-start" }}
                >
                  {!picture ? (
                    <>
                      <label htmlFor="file" className="filebox">
                        <span className="plus">+</span>
                        <span>Ajoute une photo</span>
                      </label>
                      <input
                        type="file"
                        id="file"
                        onChange={(event) => {
                          setPicture(event.target.files[0]);
                          setPic(URL.createObjectURL(event.target.files[0]));
                        }}
                      />
                    </>
                  ) : (
                    <img src={`${pic}`} alt="prévisualisation"></img>
                  )}
                </div>
              </div>
              <div className="whitebox2">
                <div className="publish_details">
                  <p>Titre</p>
                  <input
                    type="text"
                    placeholder="ex: Chemise Sézane verte"
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  ></input>
                </div>
                <div className="publish_description">
                  <p>Décris ton article</p>
                  <textarea
                    name="description"
                    rows="5"
                    id="description"
                    placeholder="ex: porté quelquefois, taillé correctement"
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="whitebox2">
                <div className="publish_details">
                  <p>Marque</p>
                  <input
                    type="text"
                    placeholder="ex: Zara"
                    onChange={(event) => {
                      setBrand(event.target.value);
                    }}
                  ></input>
                </div>
                <div className="publish_details">
                  <p>Taille</p>
                  <input
                    type="text"
                    placeholder="ex: L / 40 / 12"
                    onChange={(event) => {
                      setSize(event.target.value);
                    }}
                  ></input>
                </div>
                <div className="publish_details">
                  <p>Couleur</p>
                  <input
                    type="text"
                    placeholder="ex: Fushia"
                    onChange={(event) => {
                      setColor(event.target.value);
                    }}
                  ></input>
                </div>
                <div className="publish_details">
                  <p>Etat</p>
                  <input
                    type="text"
                    placeholder="Neuf avec étiquette"
                    onChange={(event) => {
                      setCondition(event.target.value);
                    }}
                  ></input>
                </div>
                <div className="publish_details">
                  <p>Lieu</p>
                  <input
                    type="text"
                    placeholder="ex: Paris"
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="whitebox2">
                <div className="publish_details">
                  <p>Prix</p>
                  <input
                    type="text"
                    placeholder="0,00 €"
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <input className="bouton" type="submit" value="Ajouter"></input>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
export default Publish;
