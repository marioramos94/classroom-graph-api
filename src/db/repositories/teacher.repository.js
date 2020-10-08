import Teacher from '../models/teacher'
import Course from '../models/course'

const findAll = async () => {
  return await Teacher.findAll();
}

const findOne = async (id) => {
  return await Teacher.findOne({
    where: { id },
    include: [
      { model: Course, as: 'courses', required: false }
    ]
  })
}


export  {
  findAll,
  findOne
}