import { useState } from 'react'

import { getQuote } from '../api/kanyeapi'

import { KanyeModel } from '../../models/KanyeModel'

function KanyeQuote() {
  const [quoteObj, setQuoteObj] = useState(null as KanyeModel | null)

  const clickHandler = () => {
    return getQuote()
      .then((obj) => {
        setQuoteObj(obj)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <div>
      <button onClick={clickHandler}>NEW KANYE QUOTE</button>
      {/* <p>{quoteObj.quote}</p> */}
      {quoteObj && (
        <div>
          <p>{quoteObj.quote}</p>
          <p>- Kanye West</p>
        </div>
      )}
    </div>
  )
}

export default KanyeQuote
