import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic()
  const {user} = useAuth()
  const navigate = useNavigate()
  const [clientSecret, setClientSecret] = useState('')



  const {data: bookingPackage} = useQuery({
    queryKey: ['bookingPackage'],
    queryFn: async()=>{
        const res = await axiosPublic.get(`/bookings3/${id}`)
        return res?.data
    }
  })
  const [bookingData] = bookingPackage || []  
  const totalPrice = bookingData?.price || {}

  useEffect(()=>{
    totalPrice > 0 &&
            axiosPublic.post('/create-payment-intent', {price: totalPrice})
            .then(res =>{
                console.log(res?.data?.clientSecret)
                setClientSecret(res?.data?.clientSecret)
            })
  },[axiosPublic, totalPrice])

 


  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastId = toast.loading("Payment Pending...");

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
    } else {
        console.log("Payment Method", paymentMethod);
    }
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || "A/N",
                name: user?.displayName || "A/N",
            },
        },
    });
    if (confirmError) {
          toast.error(confirmError.message, { id: toastId })
        console.log("Confirm Error", confirmError);
      }else{
        console.log("payment intent", paymentIntent)
        if(paymentIntent.status === "succeeded"){
            const paymentDetails ={
                user_name: user?.displayName,
                user_email: user?.email,
                price: totalPrice,
                payment_id: paymentIntent?.id,
                package_name: bookingData?.trip_title,
                
            }
            axiosPublic.post('/payment', paymentDetails)
            .then(res =>{
                if(res?.data?._id){
                    navigate('/dashboard/bookings')
                    toast.success("Payment Successfully!", { id: toastId });
                }
            })

        }
      }



  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-circle w-20 bg-blue-700" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
    </div>
  );
};
CheckoutForm.propTypes ={
    id: PropTypes.string.isRequired,

}

export default CheckoutForm;
