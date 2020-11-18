import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ title, amount }) => {
  const [succeed, setSucceed] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id acheteur",
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: Number(amount * 100).toFixed(2),
        }
      );
      console.log(response);
      if (response.data.status === "succeeded") {
        setSucceed(true);
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {succeed ? (
        <p className="validation">Paiement validé !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement className="card_stuff" />
          <button className="button_pay" type="submit">
            Pay
          </button>
        </form>
      )}
    </div>
  );
};
export default CheckoutForm;
