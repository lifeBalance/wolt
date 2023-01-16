import Input from './input'
import React from 'react'

function Calculator() {
  const [cartValue, setCartValue] = React.useState('')
  const [deliveryDistance, setDeliveryDistance] = React.useState('')
  const [amountItems, setAmountItems] = React.useState('')
  const [time, setTime] = React.useState('')
  const [price, setPrice] = React.useState(0)

  function calculatePrice(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault()
    // Do calculations here
    setPrice(2) // hardcoded price for testing
  }

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
          changeHandler={(e) => setCartValue(e.target.value)}
        />

        <Input
          label='delivery distance'
          id='delivery-distance'
          type='number'
          placeholder='Enter delivery distance'
          value={deliveryDistance}
          unit='m'
          changeHandler={(e) => setDeliveryDistance(e.target.value)}
        />

        <Input
          label='amount of items'
          id='delivery-distance'
          type='number'
          placeholder='Enter amount of items'
          value={amountItems}
          changeHandler={(e) => setAmountItems(e.target.value)}
        />

        <Input
          label='time'
          id='time'
          type='date'
          placeholder='Enter date'
          value={time}
          changeHandler={(e) => setTime(e.target.value)}
        />
        <button className='capitalize text-white border rounded-md p-2 hover:bg-white hover:bg-opacity-25 w-full md:w-80' onClick={calculatePrice}>
          calculate delivery price
        </button>
      </form>

      <p className='text-white text-xl'>
        Delivery price:
        <span className='ml-2'>
          {price} <span>&euro;</span>
        </span>
      </p>
    </div>
  )
}
export default Calculator
