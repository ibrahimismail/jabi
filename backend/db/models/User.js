import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import config from '../config';

dotenv.config();
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
	dbConfig.DB_NAME,
	dbConfig.DB_USERNAME,
	dbConfig.DB_PASSWORD,
	{
		host: dbConfig.DB_HOST,
		dialect: dbConfig.DB_DIALECT,
	}
);

export function define(sequelize, DataTypes) {
	const User = sequelize.define(
		'User',
		{
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
			},
		},
		{}
	);
	return User;
}

const User = define(sequelize, Sequelize.DataTypes);
export default User;
