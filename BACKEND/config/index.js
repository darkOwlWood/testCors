require('dotenv').config();

const config = {
    port:        process.env.PORT,
    development: process.env.ENV==='DEVELOPMENT',
    frontend:    process.env.FRONTEND,
    protocol:    process.env.ENV==='DEVELOPMENT'? 'http': 'https',
};

module.exports = {
    config
}