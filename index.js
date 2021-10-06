const express = require('express')
const app = express()
const port = 5000
const config = require('./config/key');
const { User } = require('./Models/User');

app.use(express.urlencoded({extended: true}));

app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
  useNewUrlParser: true,useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.post('/register',(req, res) => {
  //회원가입 할때 필요한 정보들을 클라이언트에서 가져오면 
  //그것들을 데이터 베이스에 넣어 준다.

  const user = new User(req.body)

  user.save((err, doc) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})