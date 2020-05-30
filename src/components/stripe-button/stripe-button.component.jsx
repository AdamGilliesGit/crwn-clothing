import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_o57ZqLQMYUCGvfrqXxXuMAXp00QTCvkUA1';

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="PayNow"
      name="CRWN Clothing Ltd."
      currency="GBP"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your totla is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
