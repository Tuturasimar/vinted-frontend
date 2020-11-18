import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const Payment = ({ token }) => {
  const location = useLocation();
  console.log(location);
  const title = location.state.title;
  const amount = location.state.amount;
  const total = Number(amount + 0.4 + 0.8).toFixed(2);
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

  if (token) {
    return (
      <>
        <div className="bigstuff">
          <div className="container">
            <div className="box_payment">
              <div className="box_payment2">
                <div className="first_box">
                  <p>Résumé de la commande</p>
                  <div className="payment_line">
                    <span>Commande</span>
                    <span>{amount} €</span>
                  </div>
                  <div className="payment_line">
                    <span>Frais protection acheteurs</span>
                    <span>0.40 €</span>
                  </div>
                  <div className="payment_line">
                    <span>Frais de port</span>
                    <span>0.80 €</span>
                  </div>
                </div>
                <div className="second_box">
                  <div className="payment_line">
                    <span>Total</span>
                    <span>{total} €</span>
                  </div>
                  <p>
                    Il ne vous reste plus qu'une étape pour vous offrir
                    <span> {title}</span>. Vous allez payer
                    <span> {total} €</span> (frais de protection et frais de
                    port inclus).
                  </p>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm title={title} amount={total} />
                  </Elements>
                </div>
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
