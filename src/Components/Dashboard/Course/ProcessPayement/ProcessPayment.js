import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';




const stripePromise = loadStripe('pk_test_51IeAx3Bqj7Go8jYKTDqEzBhFk8c3pOjXbho9x9oG5HyUgaWxcOZMT5ysD4JN3Pmr5SnxEQx9u9Qjn5Hc31EclRId00zOOVFu4Z');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;