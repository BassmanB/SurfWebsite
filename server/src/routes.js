const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const InsertData = require('./controllers/InsertData')

module.exports = (app)=>{
app.post('/register',
  InsertData.registrationInsert,
  //AuthenticationControllerPolicy.register,
  //AuthenticationController.register,
(req, res)=>{

    console.log(req.body)

  })

app.post('/booking',
  InsertData.booking, (req, res)=> {
      res.send({
        message:`Your usser was registered! ${req.body.email} LOOL ${req.body.name}`
      })
})
}
