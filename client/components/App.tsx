import { useState, useEffect } from 'react'

import { getWelcome } from '../apiClient'
import KanyeQuote from './KanyeQuote'
import StockPrice from './StockPrice'
import Weather from './Weather'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>{welcomeStatement}</h1>
      <KanyeQuote />
      <Weather />
      <br />
      <br />
      <StockPrice />
    </>
  )
}

export default App
