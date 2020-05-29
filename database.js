const Sequelize = require('sequelize')
const dotenv = require("dotenv")
dotenv.config()
const db = new Sequelize(process.env.DATABASE,process.env.DATABASE,process.env.PASSWORD, {
    host:'remotemysql.com',
    dialect: 'mysql',
    port:3306,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Data = db.define('data', {
    ID:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    name:Sequelize.STRING,
    slot:Sequelize.STRING,
    quan:Sequelize.INTEGER,


})
const Stud = db.define('stud', {
    ID:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement: true,
    },
    name:Sequelize.STRING,
    slot:Sequelize.STRING,
    question:Sequelize.STRING,


})


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Data,Stud
}
