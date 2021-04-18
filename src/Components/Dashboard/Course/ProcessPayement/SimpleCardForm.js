import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-5">
                <CardElement />
                <button type="submit" className="btn btn-success mt-3" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }} className="p-3">{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }} className="p-3">Your payment was successfully complete.</p>
            }
        </div>
    );
};

export default SimpleCardForm;