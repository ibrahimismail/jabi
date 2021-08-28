require('dotenv').config();

async function main() {
	try {
		console.log('Starting database models synchronization...');
		const sequelize = require('../../db/sequelize');
		await sequelize.sync({ alter: true });
		console.log('All models were synchronized successfully.');
	} catch (exception) {
		console.error(exception);
	}
}

main();
