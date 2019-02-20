const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.db.database, env.db.username, env.db.password, {
    host: env.db.host,
    dialect: env.db.dialect,
    operatorsAliases: false,

    pool: {
        max: env.db.max,
        min: env.db.pool.min,
        acquire: env.db.pool.acquire,
        idle: env.db.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('../model/user.model')(sequelize, Sequelize);

module.exports = db;
