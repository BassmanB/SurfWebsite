const {User} = require('../models')
const {customer} = require('../models')

module.exports = {
async register (req, res) {
  try {
  const user = await User.create(req.body)
  console.log(req.body)
  res.send(user.toJSON())

} catch (err) {
    res.status(400).send({

      error: 'This email account is already in use.'
    })
    }
//   },
//   async booking (req, res) {
//     try {
//     const user = await customer.create(req.body)
//     res.send(customer.toJSON())
//
//   } catch (err) {
//       res.status(400).send({
//         error: 'no'
//
//       })
//       }
// }
}}
