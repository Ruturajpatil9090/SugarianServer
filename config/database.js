const  Sequelize  = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    dialect:process.env.DB_DILECT,
    host:process.env.DB_SERVER,
    database:process.env.DB_NAME, 
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    
    dialectOptions: {
        options: {
            encrypt: true,
            trustedConnection: true,
            enableArithAbort: true,   
        }
    }
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });


module.exports = sequelize;