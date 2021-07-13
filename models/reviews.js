const {DataTypes} = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cast: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ownerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Review