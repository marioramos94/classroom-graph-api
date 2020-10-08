const Sequelize = require("sequelize")

class Teacher extends Sequelize.Model {
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
      name: Sequelize.STRING,
      code:Sequelize.STRING,
      lastName: {
        field: 'last_name',
        type: Sequelize.STRING,
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
      tableName: 'teachers',
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Course, { foreignKey: 'teacherId', as: 'courses'})
  }
}

export default Teacher