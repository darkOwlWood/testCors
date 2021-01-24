require('dotenv').config();

const config = {
    port:         process.env.PORT,
    development:  process.env.ENV==='DEVELOPMENT',
    frontend:     process.env.FRONTEND,
    protocol:     process.env.ENV==='DEVELOPMENT'? 'http': 'https',
    cookieSecret: process.env.COOKIE_SECRET,
};

module.exports = {
    config
}