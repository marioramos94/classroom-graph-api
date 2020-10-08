const Sequelize = require("sequelize")

class CourseUser extends Sequelize.Model {
  getCreatedAt() {
    let time = this.createdAt;
    let date = new Date(time)
    return date.getTime()
  }

  getUpdatedAt() {
    let time = this.updatedAt;
    let date = new Date(time)
    return date.getTime()
  }

  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
      },
      courseId: {
        field: 'course_id',
        type: Sequelize.INTEGER,
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
      }
    }, {
      underscored: true,
      freezeTableName: true,
      tableName: 'course_users',
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Course, {
      foreignKey: 'courseId',
      as: 'course'
    })
    this.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  }
}

export default CourseUser