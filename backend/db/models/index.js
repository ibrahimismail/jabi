'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import config from '../config';
import { fileURLToPath } from 'url';

dotenv.config();
const env = process.env.NODE_ENV || 'development';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basename = 'index.js';
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

const loadModels = async () => {
	let db = {};
	const files = fs.readdirSync(__dirname).filter((file) => {
		return (
			file.indexOf('.') !== 0 &&
			file !== basename &&
			file.slice(-3) === '.js'
		);
	});

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const modelPath = path.join(__dirname, file);
		await import(modelPath)
			.then((module) => {
				const model = module.default;
				const Model = model(sequelize, Sequelize.DataTypes);
				db[model.name] = Model;
			})
			.catch((e) => console.error(e));
	}
	return db;
};

const db = await loadModels();

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
