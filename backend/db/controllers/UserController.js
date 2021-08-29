import User from '../models/User';

const findAllUsers = async (req, res, next) => {
	try {
		const users = await User.findAll();
		res.send({ users });
	} catch (e) {
		console.error(e);
	}
};

const createUser = async (req, res, next) => {
	try {
		await User.create({
			...req.body,
		});
		res.send({ message: 'user created' });
	} catch (e) {
		console.error(e);
	}
};

export default {
	findAllUsers,
	createUser,
};
