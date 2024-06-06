import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutFrom.css'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im'
// Conceptual Sessions Day 4  Part 3 minute 34:32

const CheckoutForm = ({closeModal, employeeInfo, refetch}) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState()
  const [cardError, setCardError] = useState('')
  const [processing, setProcessing] = useState(false)
  const {user} = useAuth()
  const date = new Date();
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  useEffect(() =>{
    if ( employeeInfo?.salary && employeeInfo?.salary > 1) {
      getClientSecret({salary: employeeInfo.salary})
    }
  },[employeeInfo.salary])

  //   get clientSecret
  const getClientSecret = async salary => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, salary)
    console.log('clientSecret from server--->', data)
    setClientSecret(data.clientSecret)
  }
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true)
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error?.message)
      setProcessing(false)
      return
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('')
    }
    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

      if (confirmError) {
        setCardError(confirmError.message)
        setProcessing(false)
        return
      }
      if (paymentIntent.status === 'succeeded') {
        console.log(paymentIntent);
        // 1.create payment info object
        const paymentInfo = {
          ...employeeInfo,
          employeeId: employeeInfo.id,
          transactionId : paymentIntent.id,
          date: new Date(),
          month: month,
          year: year
        }
        delete paymentInfo._id
        console.log(paymentInfo);
        try{
          // save payment info
         const {data} = await axiosSecure.post('/payments', paymentInfo)
          console.log(data);

        refetch()
        closeModal()
        }catch(err){
          console.log(err);
        }
        setProcessing(false)

      }








  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className='flex mt-2 justify-around'>
        <button
          disabled={!stripe || !clientSecret || processing}
          type='submit'
          className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
        >
        {processing ? <ImSpinner9 className='animate-spin m-auto'  size={24}/> : `Pay ${employeeInfo.salary}` }
          
        </button>
        <button
          onClick={closeModal}
          type='button'
          className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
        >
          Cancel
        </button>
      </div>

    </form>
    {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  );
};



export default CheckoutForm;