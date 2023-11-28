import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const CheckoutForm = ({ loadedClass }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  // console.log(loadedClass);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axiosPublic
      .post("/create-payment-intent", {
        price: loadedClass.price,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosPublic, loadedClass]);

  //   payment related form handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method ", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error ");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction id :", paymentIntent.id);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: true,
            timer: 1200,
          });
        setTransactionId(paymentIntent.id);
        const enrollClass = {
          transactionId: paymentIntent.id,
          userName: user.displayName,
          userEmail: user.email,
          title: loadedClass.title,
          teacherName: loadedClass.name,
          price: loadedClass.price,
          image: loadedClass.image,
          total_enrollment: loadedClass.total_enrollment,
          category: loadedClass.category,
        };
        // console.log(enrollClass);
        axiosPublic.post("/enrollClass", enrollClass).then((res) => {
          console.log(res.data);
        });
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
          className="w-[500px] mx-auto "
        />
        <div className="text-center mt-5">
          <button
            className={`text-center py-2 bg-[#570DF8] text-white rounded-md w-[300px]`}
            type="submit"
            disabled={!stripe || !clientSecret || transactionId}
          >
            Pay
          </button>
          <p className="text-red-600">{error}</p>
          {transactionId && (
            <p className="text-green-600 mt-4">
              Your Transaction id : {transactionId}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
