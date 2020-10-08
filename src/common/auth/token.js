
const jwt = require('jsonwebtoken')

const {
  JWT_LIFE_TIME,
  JWT_SECRET
} = process.env

const create = user => new Promise((resolve, reject) => {
  jwt.sign({
    user
  }, JWT_SECRET, {
    expiresIn: JWT_LIFE_TIME
  }, (error, token) => {
    if (error) {
      return reject(error)
    }
    resolve(token)
  })
})

const getDecodedToken = token => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
    if (error) {
      new Error ()
      return reject(new Error ("InvalidAuthorizationToken"))
    }
    if (!decodedToken.exp || !decodedToken.iat) {
      return reject(new Error ("ExpiredAuthorizationToken"))
    }
    resolve(decodedToken)
  })
})

module.exports = {
  create,
  getDecodedToken
}
