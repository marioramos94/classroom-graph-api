import { findAll } from './../../../db/repositories/course.repository'

const getCourses = async () => {
  return await findAll()
}

export {
  getCourses
}