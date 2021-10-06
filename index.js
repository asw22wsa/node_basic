const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://asw11wsa:tjdghk5328@cluster0.jhklw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})