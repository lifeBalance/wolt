import Input from './input'
import React from 'react'
import useForm from '../hooks/useForm'

function Calculator() {
  const {
    cartValue,
    handleCartValue,
    deliveryDistance,
    handleDeliveryDistance,
    amountItems,
    handleAmountItems,
    time,
    dateTimeHandler,
    errors,
    price,
    setPrice,
    calculatePrice
  } = useForm()

  // To set the 'min' attribute in the date-time input
  const dateTimeNow = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(':'))

  // If any of the inputs is modified, set price to 0; it has to be computed again.
  React.useEffect(() => {
    setPrice(0)
  }, [cartValue, deliveryDistance, amountItems, time])

  return (
    <div className='flex flex-col max-w-6xl mx-auto space-y-12 py-10 md:py-20'>
      <form className='flex flex-col space-y-10'>
        <Input
          label='cart value'
          id='cart-value'
          type='number'
          placeholder='Enter cart value'
          value={cartValue}
          unit='&euro;'
          changeHandler={handleCartValue}
          isRequired={true}
          min={1}
          errors={errors}
        />

        <Input
          label='delivery distance'
          id='delivery-distance'
          type='number'
          placeholder='Enter delivery distance'
          value={deliveryDistance}
          unit='m'
          changeHandler={handleDeliveryDistance}
          isRequired={true}
          min={1}
          errors={errors}
        />

        <Input
          label='amount of items'
          id='amount-items'
          type='number'
          placeholder='Enter amount of items'
          value={amountItems}
          changeHandler={handleAmountItems}
          isRequired={true}
          min={1}
          errors={errors}
        />

        <Input
          label='time'
          id='date-time'
          type='datetime-local'
          placeholder='Enter date'
          value={time}
          changeHandler={dateTimeHandler}
          isRequired={true}
          min={dateTimeNow}
          errors={errors}
        />

        <button
          className='capitalize text-white border rounded-md p-2 hover:bg-white hover:bg-opacity-25 w-full md:w-80' onClick={calculatePrice}
        >
          calculate delivery price
        </button>
      </form>

      <p className='text-white text-xl'>
        <span>Delivery price:</span>

        <span className='ml-2 font-bold'>
          {price.toFixed(2)} <span>&euro;</span>
        </span>
      </p>
    </div>
  )
}

export default Calculator
