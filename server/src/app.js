
console.log("hello motherfuckers");

const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const Sequelize = require('sequelize')
const config = require('./config/config')



// const sequelize = new Sequelize('surfing', 'root','',{
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3307
// })




sequelize.query('Select * from customer').spread((results, metadata)=>{
  console.log("kurwaaaaaaaaaaaaaaaaaa ")
  console.log(results);
})

//console.log(config.db.options.port);
// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   port     : '3307',
//   password : '',
//   database : 'surfing'
// });
//   db.connect((error)=>{
//     if(error){
//       console.log("error");
//     }else{
//       console.log("yeah");
//     }
//   });
//   db.query('INSERT INTO customer (name, full_name, email,phone_number) values ("Twoj","Stary", "mail", 987655) ', function (error, results, fields) {
//     if (error) console.log("KURWA");
//     console.log("Perfecto");
//     // Don't use the connection here, it has been returned to the pool.
// });
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)


sequelize.sync().then((
) => {

  app.post('/register',
      (req, res)=>{
        sequelize.query(`INSERT into users (email, password) values (${req.body.email} , ${req.body.password})`)
        .spread((results, metadata)=>{
      console.log(results);
      console.log("I co tu sie odpierdala");

    })})
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`

  )
});
