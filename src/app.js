import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

const cors = require('cors')
const context = require('./common/core/context')
const schema = require('./modules')

const server = new ApolloServer({
  schema,
  context: async ({ req, connection }) => {
    if (connection) {
      return connection.context
    }
    return { user: await context.getUser(req) }
  },
  engine: {
    debugPrintReports: true,
  },
  formatError: (err) => {
    console.log(err)
    if (err.extensions.code === 'GRAPHQL_VALIDATION_FAILED' ||
     (err.extensions.exception.code &&
      err.extensions.exception.code === 'ERR_GRAPHQL_CONSTRAINT_VALIDATION')) {
      return { message: err, code: 'no code' }
    }
    return { message: err, code: 'no code' }
  },
})

const app = express()

server.applyMiddleware({
  path: '/',
  app
})

app.use(morgan('[:date[iso]] :method :url :status :response-time ms - :res[content-length]'))
app.use(express.json({limit: '5mb'}))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

module.exports = {
  app,
  server,
}
