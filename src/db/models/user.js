const Sequelize = require("sequelize")

class User extends Sequelize.Model {
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
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      name: Sequelize.STRING,
      isAdmin: {
        field: 'is_admin',
        type: Sequelize.BOOLEAN,
      },
      lastName: {
        field: 'last_name',
        type: Sequelize.STRING,
      },     
      documentType: {
        field: 'document_type',
        type: Sequelize.ENUM('PASSPORT', 'DNI'),
      },
      document: Sequelize.STRING,
      gender: {
        field: 'gender',
        type: Sequelize.ENUM('FEMALE', 'MALE'),
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
      tableName: 'users',
      sequelize
    })
  }
}

export default User