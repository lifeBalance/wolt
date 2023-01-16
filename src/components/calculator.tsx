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
    let orderValue: number = Number(cartValue)
    let distance: number = Number(deliveryDistance)
    let items: number = Number(amountItems)
    let orderTime: Date = new Date(time)

    // Free delivery for 100 bucks orders (or greater).
    if (orderValue >= 100) {
      return setPrice(0)
    }

    // If the cart value is less than 10€, add "cheapskate" surcharge.
    let cheapskateFee: number = (orderValue < 10) ? 10 - orderValue : 0
    
    let distanceFee: number = 0
    // Distance: 2eu for first km, plus 1eu for each additional 500m (or fraction)
    if (distance >= 1000) {
      distanceFee += 2 // Add 2eu for the first km
      distance -= 1000 // Subtract the 1st km from the distance
      /* If after subtracting the first km, we have a positive number,
        add 1eu per additional 500m. */
      distanceFee += (distance > 0) ? Math.ceil(distance / 500) : 0
    }

    // Fees for amount of items
    let itemsFee: number = 0
    if (items >= 5) {
      itemsFee += (items - 4) * 0.50    // add 50 cents per item over 5
      itemsFee += items > 12 ? 1.2 : 0  // at 1.2 eu in case of extra bulk
    }
    
    // Fees for date/time of the order
    const weekDay: string = orderTime.toLocaleDateString('en-FI', { weekday: 'long' })
    const hour: number = orderTime.getHours()
    // console.log(weekDay , hour) // testing
    let timeFee: boolean
    timeFee = (weekDay === 'Friday' && hour >= 15 && hour <= 19) ? true : false

    let total: number = orderValue + cheapskateFee + distanceFee + itemsFee
    if (timeFee) total *= 1.2 // apply the time fee if necessary

    setPrice(Math.min(total, 15))
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
          type='datetime-local'
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
          {price.toFixed(2)} <span>&euro;</span>
        </span>
      </p>
    </div>
  )
}

export default Calculator
