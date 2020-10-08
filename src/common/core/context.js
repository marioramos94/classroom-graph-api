const tokenUtil = require('../auth/token')
import UserRepository from '../../db/repositories/user.repository'
const TOKEN_HEADER_NAME = 'Authorization'
const getUser = async req => {
  if (!req) {
    return null
  }

  let tokenHeader = req.get(TOKEN_HEADER_NAME)

  if (!tokenHeader) {
    return null
  }
  if (tokenHeader.startsWith('Bearer ')) {
    tokenHeader = tokenHeader.slice(7, tokenHeader.length)
  }

  try {
    const decodedToken = await tokenUtil.getDecodedToken(tokenHeader)
    return await UserRepository.findUserById(decodedToken.user.id)
  } catch (error) {
    return null
  }
}
module.exports = {
  getUser
}
