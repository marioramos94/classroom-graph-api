const typeDefs = `
input LoginInput {
  email: String! @constraint(format: "email")
  password: String! @constraint(minLength: 6)
}

type AuthData {
  token: String!
  isAdmin: String
}
`
export default typeDefs
