
import LoginTypedefs from './typedefs/login.typedefs'

const typeDefs = ` 
  # This service let to the user get logged
  extend type Mutation {
    login(input: LoginInput!): AuthData
  }
  enum Document{
    DNI
    PASSPORT
  }
  interface User{
    id: ID!
    name: String!
    email: String!
    phone: String!
    documentType: Document!
    document: String!
  }
  type Admin implements User{  
    id: ID!
    name: String!
    email: String!
    phone: String!
    documentType: Document!
    document: String!
    isAdmin:Boolean!
  }
  
`
const resolvers = require('./resolvers')
module.exports = {
  typeDefs: [
    typeDefs,
    LoginTypedefs    
  ],
  resolvers
}
