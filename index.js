const express = require('express')

const app = express()

app.use(() => {
  console.log("Hello server ...")
  console.log("Hello server2 ...")
})

app.listen(4000)