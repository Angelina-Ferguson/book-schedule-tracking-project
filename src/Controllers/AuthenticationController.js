import * as UsersController from './UsersController.js'

export const checkLogin = async (req, res, next) => {
  if (req.username != "" && req.password !="" && UsersController.isValidUser(req) === 1) {
    res.send(JSON.stringify({"Response" : "200", "Message": `${req.username} logged in successfully!`}))
  } else {
    res.send(JSON.stringify({"Response" : "401", "Message": `ERROR: Invalid login credentials.`}))
  }
};