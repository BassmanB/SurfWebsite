module.exports = (sequelize, DataTypes) =>
  sequelize.define('Customer', {
      name:  DataTypes.STRING,
      surname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      phoneNumber: DataTypes.STRING

  })
