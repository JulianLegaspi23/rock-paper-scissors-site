import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const LoginDetailsModel = sequelize.define('loginDetails', {
    _id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    tempPassword: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'loginDetails',
    timestamps: false,
});

export default LoginDetailsModel;
