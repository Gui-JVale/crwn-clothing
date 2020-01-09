import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 
import axios from 'axios'; 

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publichsapleKey = "pk_test_FOmoNh12xzAjtWDNg5iVuzve00qC7YniL4";

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Succesfull")
        }).catch(error => {
            console.log("Payment error: ", error);
            alert(
                "There was an issue with your payment. Please sure you use the provided credit card."
            );
        });
    };

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