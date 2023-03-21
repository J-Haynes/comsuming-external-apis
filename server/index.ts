import server from './server'

const path = require('path')
const dotenv = require('dotenv')

const port = process.env.PORT || 3000

const envPath = path.join(__dirname, '../.env')

dotenv.config({ path: envPath })

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
  console.log('Weather API key is: ', process.env.WEATHER_KEY)
})
