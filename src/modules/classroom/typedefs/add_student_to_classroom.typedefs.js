const typeDefs = `
input StudentSubscriptionInput {
    course:ID
    student:ID
  }
type StudentSubscription {
  id:ID
  courseId:ID
  studentId:ID
} 
`
export default typeDefs
