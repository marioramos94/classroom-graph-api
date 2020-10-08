import { getTeachers } from './get_teachers'
import { getStudents } from './get_students'
import { getCourses } from './get_courses'
import { getClassroom} from './get_classroom'
import { addStudentToClassroom } from './add_student_to_classroom'

const resolvers = {
  Query: {
    getTeachers,
    getCourses,
    getClassroom,
    getStudents
  },
  Mutation: {    
    addStudentToClassroom
  }  
}
module.exports = resolvers
