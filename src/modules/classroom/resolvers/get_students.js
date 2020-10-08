import { findAllStudents } from './../../../db/repositories/user.repository'

const getStudents = async () => {
  return await findAllStudents()
}

export {
  getStudents
}