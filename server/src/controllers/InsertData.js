const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const {sequelize} = require('../models')
const Sequelize = require('sequelize')
const config = require('../config/config')

module.exports = {
async registrationInsert(req, res) {
  try {
    sequelize.query(`INSERT into users (email, password) values ('${req.body.email}' , '${req.body.password}')`)
    .spread((results, metadata)=>{
  console.log(results);
  console.log("I co tu sie odpierdala")
  })

} catch (err) {
    res.status(400).send({
      error: 'This email account is already in use.'
    })
    }
},
async booking(req, res){
  try{
    sequelize.query(`INSERT customer  (name, full_name, email, phone_number) values ('${req.body.name}' ,
    '${req.body.surname}', '${req.body.email}', '${req.body.phoneNumber}')`)
    .spread((results, metadata)=>{
  console.log(results);
  console.log("booking!")
  })
  } catch (err){

  }
}

}
