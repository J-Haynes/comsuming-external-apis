import { useState, useEffect } from 'react'

import { getPrice } from '../api/stockpriceapi'

function StockPrice() {
  const [price, setPrice] = useState()

  useEffect(() => {
    getPrice()
      .then((price) => {
        setPrice(price)
        console.log(price.c)
      })
      .catch((err) => console.log(err.message))
  }, [])

  console.log(price)
  return (
    <div>
      <p>Apple Price is: </p>
    </div>
  )
}

export default StockPrice
