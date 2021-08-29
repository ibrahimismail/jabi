import express from 'express';
import db from '../db/models';

var router = express.Router();

router.get('/', async function (req, res, next) {
	try {
		const users = await db.sequelize.models.User.findAll();
		res.send({ users });
	} catch (e) {
		console.error(e);
	}
});

router.post('/', async function (req, res, next) {
	try {
		await db.sequelize.models.User.create({
			...req.body,
		});
		res.send({ message: 'user created' });
	} catch (e) {
		console.error(e);
	}
});

export default router;
