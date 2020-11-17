import React from "react";
import { Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const Payment = ({ token, title, amount }) => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  console.log("titre", title);
  console.log(amount);
  if (token) {
    return (
      <>
        <div className="bigstuff">
          <div className="container">
            <div className="box_payment">
              <div className="first_box">
                <p>Résumé de la commande</p>
                <div>
                  <span>Commande</span>
                  <span>{amount}</span>
                </div>
                <div>
                  <span>Frais protection acheteurs</span>
                  <span>0.40 €</span>
                </div>
                <div>
                  <span>Frais de port</span>
                  <span>0.80 €</span>
                </div>
              </div>
              <div className="second_box">
                <div>
                  <span>Total</span>
                  <span></span>
                </div>
                <p>
                  Il ne vous reste plus qu'une étape pour vous offrir {title}.
                  Vous allez payer (....) (frais de protection et frais de port
                  inclus).
                </p>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default Payment;
