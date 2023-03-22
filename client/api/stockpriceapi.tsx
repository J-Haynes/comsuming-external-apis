import request from 'superagent'

export function getPrice() {
  return request
    .get(
      'https://finnhub.io/api/v1/quote?symbol=AAPL&token=cgd7ct9r01qum7u5ts3gcgd7ct9r01qum7u5ts40'
    )
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err.message))
}
