import React from 'react'

function useForm() {
  const [cartValue, setCartValue] = React.useState('')
  const [deliveryDistance, setDeliveryDistance] = React.useState('')
  const [amountItems, setAmountItems] = React.useState('')
  const [time, setTime] = React.useState('')
  const [price, setPrice] = React.useState(0)

  const [errors, setErrors ] = React.useState({
    'cart-value': {
      value: false, message: 'Cart Value is required'
    },
    'delivery-distance': {
      value: false, message: 'Distance is required'
    },
    'amount-items': {
      value: false, message: 'Amount of items is required'
    },
    'date-time': {
      value: false, message: 'Time of delivery is required'
    }
  })

  function handleCartValue(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors(prev => ({
      ...prev,
      'cart-value': { ...prev['cart-value'], value: false }
    }))
    setCartValue(e.target.value)
  }

  function handleDeliveryDistance(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors(prev => ({
      ...prev,
      'delivery-distance': { ...prev['delivery-distance'], value: false }
    }))
    setDeliveryDistance(e.target.value)
  }

  function handleAmountItems(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors(prev => ({
      ...prev,
      'amount-items': { ...prev['amount-items'], value: false }
    }))
    setAmountItems(e.target.value)
  }

  function dateTimeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setErrors(prev => ({
      ...prev,
      'date-time': { ...prev['date-time'], value: false }
    }))
    // console.log('selected', e.target.value)
    setTime(e.target.value)
  }

  function validateForm() {
    let validForm = true
  
    if (cartValue === '') {
      setErrors(prev => ({
        ...prev,
        'cart-value': { ...prev['cart-value'], value: true }
      }))
      validForm = false
    }
    if (deliveryDistance === '') {
      setErrors(prev => ({
        ...prev,
        'delivery-distance': { ...prev['delivery-distance'], value: true }
      }))
      validForm = false
    }
    if (amountItems === '') {
      setErrors(prev => ({
        ...prev,
        'amount-items': { ...prev['amount-items'], value: true }
      }))
      validForm = false
    }
    if (time === '') {
      setErrors(prev => ({
        ...prev,
        'date-time': { ...prev['date-time'], value: true }
      }))
      validForm = false
    }
    return validForm
  }

  function calculatePrice(e: React.SyntheticEvent) {
    e.preventDefault()

    if (!validateForm()) return
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
    
    let distanceFee: number = 2  // Base fee of 2eu for the first km
    // Distance: 2eu for first km, plus 1eu for each additional 500m (or fraction)
    if (distance >= 1000) {
      distance -= 1000 // Subtract the 1st km from the distance
      /* If after subtracting the 1st km, we have a positive number,
        add 1eu per additional 500m. */
      distanceFee += (distance > 0) ? Math.ceil(distance / 500) : 0
    }

    // Fee for amount of items
    let itemsFee: number = 0
    if (items >= 5) {
      itemsFee += (items - 4) * 0.50    // add 50 cents per item over 5
      itemsFee += items > 12 ? 1.2 : 0  // at 1.2 eu in case of extra bulk
    }
    
    // Fee for date/time of the order
    const weekDay: string = orderTime.toLocaleDateString('en-FI', { weekday: 'long' })
    const hour: number = orderTime.getHours()
    console.log(weekDay , hour) // testing

    let timeFee: boolean
    timeFee = (weekDay === 'Friday' && hour >= 15 && hour <= 19) ? true : false

    // The total amount the customer have to pay for the delivery of her order
    let total: number = cheapskateFee + distanceFee + itemsFee
    if (timeFee) total *= 1.2 // apply the time fee if necessary

    setPrice(Math.min(total, 15))
  }

  return {
    cartValue,
    handleCartValue,
    deliveryDistance,
    handleDeliveryDistance,
    amountItems,
    handleAmountItems,
    time,
    dateTimeHandler,
    errors,
    validateForm,
    price,
    setPrice,
    calculatePrice
  }
}

export default useForm