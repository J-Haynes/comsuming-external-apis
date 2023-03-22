import { useState, useEffect } from 'react'

import { getPrice } from '../api/stockpriceapi'

function StockPrice() {
  const [price, setPrice] = useState()

  useEffect(() => {
    getPrice()
      .then((price) => {
        setPrice(price.c)
        console.log(price)
      })
      .catch((err) => console.log(err.message))
  }, [])

  console.log(price)
  return (
    <div>
      <p>AAPL:NASDAQ Price is: ${price} </p>
    </div>
  )
}

export default StockPrice
