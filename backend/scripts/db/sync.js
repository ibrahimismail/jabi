import dotenv from 'dotenv';
import sequelize from '../../db/sequelize';
dotenv.config();

async function main() {
	try {
		console.log('Starting database models synchronization...');
		await sequelize.sync({ alter: true });
		console.log('All models were synchronized successfully.');
	} catch (exception) {
		console.error(exception);
	}
}

main();
