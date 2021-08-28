import { DB_USERNAME, DB_NAME, DB_PASSWORD, DB_HOST } from './config';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
	}
);

sequelize.sync();

export default sequelize;
