require('dotenv').config();

module.exports = {
    app_port : process.env.APP_PORT,
    pg_credentials : {
        user : process.env.DATABASE_USER,
        pass : process.env.DATABASE_PASS
    },
    pg_uri : process.env.DATABASE_URI,
    redis_port : process.env.REDIS_PORT,
    redis_uri: process.env.REDIS_URI
};
