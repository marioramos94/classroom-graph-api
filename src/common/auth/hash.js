const bcrypt = require('bcryptjs')

const hashString = async (string) => {
  const promise = await new Promise((resolve, reject) => {
    bcrypt.hash(string, 10, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    })
  })

  return promise
}

const validateString = async (string, stringEncoded) => {
  const promise = await new Promise((resolve, reject) => {
    bcrypt.compare(string, stringEncoded, (err, isMatch) => {
      if (err) reject(err)

      if (isMatch) {
        resolve(true)
      } else {
        reject(new Error ("Password dont match"))
      }
    })
  })

  return promise
}

export default {
  hashString,
  validateString,
}
