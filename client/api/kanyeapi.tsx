import request from 'superagent'

import { KanyeModel } from '../../models/KanyeModel'

export function getQuote(): Promise<KanyeModel> {
  return request
    .get('https://api.kanye.rest')
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err.body))
}
