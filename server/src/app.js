
console.log("hello motherfuckers");

const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')


const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '3307',
  password : '',
  database : 'surfing'
});


  db.connect((error)=>{
    if(error){
      console.log("Mega Kurwa");
    }else{
      console.log("yeah");
    }
  });
  db.query('INSERT INTO customer (name, full_name, email,phone_number) values ("Twoj","Stary", "mail", 987655) ', function (error, results, fields) {
    if (error) console.log("KURWA");
    console.log("Perfecto");
    // Don't use the connection here, it has been returned to the pool.
});


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
});
