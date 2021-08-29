import dotenv from 'dotenv';
dotenv.config();

export default {
	development: {
		DB_NAME: process.env.DB_NAME,
		DB_USERNAME: process.env.DB_USERNAME,
		DB_PASSWORD: process.env.DB_PASSWORD,
		DB_HOST: process.env.DB_HOST,
		DB_DIALECT: 'postgres',
	},
};
