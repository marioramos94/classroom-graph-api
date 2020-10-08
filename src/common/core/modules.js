const { gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive')
const deepmerge = require('deepmerge')
const directives = require('../../directives')
const globalTypeDefs = gql`
  type Query
  type Mutation
  type Subscription
  type SuccessResponse {
    status: Int!
    code: String!
    message: String!
  }
`
const makeExecutableSchemaFromModules = ({
  modules
}) => {
  let typeDefs = [
    constraintDirectiveTypeDefs,
    globalTypeDefs,
    ...directives.typeDefs,
  ]
  let resolvers
  modules.forEach(module => {
    typeDefs = [
      ...typeDefs,
      ...module.typeDefs
    ]
    resolvers =  module.resolvers
  })
  return makeExecutableSchema({
    typeDefs,
    schemaDirectives: {
      ...directives.schemaDirectives,
    },
    schemaTransforms: [constraintDirective()],
    resolvers,
  })
}
module.exports = {
  makeExecutableSchemaFromModules
}
