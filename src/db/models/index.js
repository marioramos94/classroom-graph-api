'use strict';

require('dotenv').config(); // MARK: Import sections

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(path.dirname(require.main.filename) + '/../../config/sequelize');


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.database.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, { ...config.database });
}

import User from './user'
import Teacher from './teacher'
import Course from './course'
import CourseUser from './course_user'

const models = {
  User: User.init(sequelize, Sequelize),
  Teacher: Teacher.init(sequelize, Sequelize),
  Course: Course.init(sequelize, Sequelize),
  CourseUser: CourseUser.init(sequelize, Sequelize)
};

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = {
  ...models,
  sequelize,
  Sequelize
};

module.exports = db;
