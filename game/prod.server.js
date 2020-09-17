let express = require('express')
let config = require('./config/index')

let app = express()

app.use(express.static('./dist'))

let port = process.env.PORT || config.build.port
module.exports = app.listen(port,function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at http://localhost: ' + port + '\n')
})
