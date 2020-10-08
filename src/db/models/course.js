const Sequelize = require("sequelize")

class Course extends Sequelize.Model {
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
      name:Sequelize.STRING,
      code:Sequelize.STRING,
      teacherId: {
        field: 'teacher_id',
        type: Sequelize.INTEGER,
      },
      isActive: {
        field: 'is_active',
        type: Sequelize.BOOLEAN,
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
      tableName: 'courses',
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Teacher, {
      foreignKey: 'teacherId',
      as: 'teacher'
    })
  }
}

export default Course