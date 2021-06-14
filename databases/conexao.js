const Sequelize = require('sequelize')

const sequelize = new Sequelize('rates', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sql: Sequelize,
    sql: sequelize
}