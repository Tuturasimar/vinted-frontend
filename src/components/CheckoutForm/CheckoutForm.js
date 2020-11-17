import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
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
          title: "Test",
          amount: 1000,
        }
      );
      if (response.data.status === "succeeded") {
        setSucceed(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {succeed ? (
        <p>Paiement validé</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement /> <button type="submit">Pay</button>
        </form>
      )}
    </div>
  );
};
export default CheckoutForm;
