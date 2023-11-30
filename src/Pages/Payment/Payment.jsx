import { Elements } from "@stripe/react-stripe-js";
import Container from "../../Component/Container";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

const Payment = () => {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <div>
          <h1 className="text-center my-10 text-5xl font-semibold font-Rancho border-y-4 mx-auto border-dashed w-fit py-3">
            Payment Now
          </h1>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm id={id}></CheckoutForm>
        </Elements>
      </Container>
    </div>
  );
};

export default Payment;
