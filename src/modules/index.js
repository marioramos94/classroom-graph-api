const { makeExecutableSchemaFromModules } = require('../common/core/modules')
const classroom = require('./classroom')
module.exports = makeExecutableSchemaFromModules({
  modules: [
    classroom
  ]
})
