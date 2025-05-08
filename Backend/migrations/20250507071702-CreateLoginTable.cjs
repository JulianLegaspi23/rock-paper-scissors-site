'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("loginDetails", {
      _id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
      },
      password: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
      },
      tempPassword: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
      },
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
