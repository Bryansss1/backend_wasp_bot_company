require('dotenv').config();
const {Sequelize}=require("sequelize")

const DBPort = !process.env.DB_PORT ? 5432 : +process.env.DB_PORT;

const setSSL = !process.env.SSL_SUPPORT
  ? false
  : process.env.SSL_SUPPORT === "0"
  ? false
  : process.env.SSL_SUPPORT === "1" && true;

const dbSource=new Sequelize({
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    host:process.env.DB_HOST,
    port:DBPort,
    password:process.env.DB_PASSWORD,
    dialect:"postgres",
    sync:true,
    logging:false,
    ssl:setSSL
})

module.exports={
  dbSource
}

