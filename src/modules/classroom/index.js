const { gql } = require('apollo-server-express')

const typeDefs = gql`
  extend type Query {
    getTeachers: [Teacher] 
    getCourses:[Course]
    getClassroom(id:ID):Classroom
    getStudents:[Student]
  }
  extend type Mutation {
    addStudentToClassroom(sub:StudentSubscriptionInput!):StudentSubscription
  }
  type Course {
    id: ID
    code:String
    name: String
    teacherId:Int
  }
  type Student {  
    id: ID!
    name: String!
    email: String!
    phone: String!
    documentType: String!
    document: String!
  }
  input StudentSubscriptionInput {
      course:ID
      student:ID
  }
  type StudentSubscription {
      id:ID
      course:Course
      student:Student
  }
  type Teacher {
    id: ID!
    code:String!
    name: String!
    courses:[Course]
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
    typeDefs
  ],
  resolvers
}
