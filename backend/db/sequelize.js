const { DB_USERNAME, DB_NAME, DB_PASSWORD, DB_HOST } = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
	}
);

console.log(sequelize);
sequelize.sync();

module.exports = sequelize;
