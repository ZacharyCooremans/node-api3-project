const Users = require('../users/users-model')

function logger(req, res, next) {
  // DO YOUR MAGIC
  console.log(`${req.method}`)
  console.log(`${req.url}`)
  console.log(`[${new Date().toISOString()}]`)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  const { id } = req.params
  Users.getById(id)
    .then(user => {
      if (user) {
        req.user = user
        next()
      } else {
        res.status(404).json({
          message: 'user not found'
        })
      }
    })
    .catch(next)
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  if (!req.body.name) {
    next({
      message: "missing required name",
      status: 400
    })
  } else {
    next()
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  validateUser
}
