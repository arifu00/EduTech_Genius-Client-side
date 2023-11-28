import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Container from "../../../Components/Container/Container";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const PayClass = () => {
  const loadedClass = useLoaderData();
//   console.log(loadedClass);
  return (
    <div className="mt-12 p-20">
      <Container>
        <h2 className="text-center mb-4 font-lora text-3xl font-semibold">Payment For {loadedClass.title}</h2>
        <h4 className="text-center mb-20 font-lora text-3xl font-semibold">Class Price: ${loadedClass.price}</h4>
        <Elements stripe={stripePromise}>
          <CheckoutForm loadedClass={loadedClass}></CheckoutForm>
        </Elements>
      </Container>
    </div>
  );
};

export default PayClass;
