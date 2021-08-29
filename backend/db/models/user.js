export default function (sequelize, DataTypes) {
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
