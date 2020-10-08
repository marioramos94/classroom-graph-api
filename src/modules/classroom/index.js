import AddStudentToClassroomTypedefs from './typedefs/add_student_to_classroom.typedefs'

const typeDefs = `
  extend type Query {

    # Se obtienen todos los profesores registrados
    getTeachers: [Teacher] 

    # Se obtienen todos los cursos 
    getCourses:[Course]

    # Se obtiene un curso especifico, el profesor y sus alumnos
    getClassroom(id:ID):Classroom

    # Se obtienen los usuarios que son estudiantes
    getStudents:[Student]
  }
  extend type Mutation {
    # Se añade un alumno a un curso, permitido solo a un usuario que es administrador
    addStudentToClassroom(sub:StudentSubscriptionInput!):StudentSubscription @isAuthenticated
  }
    
  type Teacher {
    id: ID!
    code:String!
    name: String!
    courses:[Course]
  }
  type Course {
    id: ID
    code:String
    name: String
    teacherId:Int
  }  
  type Student implements User{  
    id: ID!
    name: String!
    email: String!
    phone: String!
    documentType: Document!
    document: String!
  }
  type Classroom{
    teacher:Teacher!
    course:Course
    students:[Student]
  }    
`
const resolvers = require('./resolvers')
module.exports = {
  typeDefs: [
    typeDefs,
    AddStudentToClassroomTypedefs
  ],
  resolvers
}
