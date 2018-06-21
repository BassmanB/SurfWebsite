const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}
//var Customer = require('./Customer')

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)
var Customer = sequelize.define('customer', {
    name:  Sequelize.STRING,
    surname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    phoneNumber: Sequelize.INTEGER,

})


// fs
//   .readdirSync(__dirname)
//   .filter((file) =>
//     file !== 'index.js'
//   )
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file))
//     db[model.name] = model
//   })
//
// Object.keys(db).forEach(function (modelName) {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db)
//   }
// })

// sequelize.sync({
//   force:true
// })
// .then(function(){
//   var customersInstance = Customer.create({
//     name:  'Tesete',
//     surname: 'importante',
//     email:'malpa@mlapa.pl',
//     phoneNumber: 666632
//   })
// })

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
