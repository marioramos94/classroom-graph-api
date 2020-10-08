import { app, server } from '../app'
import models from '../db/models'
const https = require('http')

var portApp = normalizePort(process.env.NODE_PORT_APP || '3003')

app.set('port', portApp)

var httpServer = https.createServer(app)
server.installSubscriptionHandlers(httpServer)

models.sequelize.sync({force: false}).then(function() {
  httpServer.listen(portApp)
  httpServer.on('error', onError);
  httpServer.on('listening', onListening);
});

function normalizePort(val) {
  let port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof portApp === 'string'
    ? 'Pipe ' + portApp
    : 'Port ' + portApp

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error;
  }
}

function onListening() {
  console.log(`🚀 Server ready at http://0.0.0.0:${portApp}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://0.0.0.0:${portApp}${server.subscriptionsPath}`)
}
