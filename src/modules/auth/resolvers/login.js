import { findUserBy } from '../../../db/repositories/user.repository'
import HashCrypt from '../../../common/auth/hash'
const tokenUtil = require('../../../common/auth/token')

const login = async (_, { input }) => {
  const { email, password } = input
  let user = await findUserBy(email)
  if (user != null) {
    await HashCrypt.validateString(password, user.password)
    let userLogged = user.dataValues    
    delete userLogged.password
    let token = tokenUtil.create(userLogged)
    return { token, isAdmin: userLogged.isAdmin }
  } else {
    throw new Error('UserNotExists')
  }
}

module.exports = login
