import { findAll } from './../../../db/repositories/teacher.repository'

const getTeachers = async () => {
  return await findAll()
}

export {
  getTeachers
}