import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publichsapleKey = "pk_test_FOmoNh12xzAjtWDNg5iVuzve00qC7YniL4";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress 
            shippingAddress
            image=""
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publichsapleKey}
        />
    )
};

export default StripeCheckoutButton; 