const { makeExecutableSchemaFromModules } = require('../common/core/modules')
const classroom = require('./classroom')
const auth = require('./auth')
module.exports = makeExecutableSchemaFromModules({
  modules: [
    classroom,
    auth
  ]
})
