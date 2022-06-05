// -- Описание моделей данных
const sequelize = require("../db");
const { DataTypes } = require("sequelize");

// -- Модель пользователя
// -- Первый параметр - название модели. Второй параметр - объект, в которым описываются поля модели
const User = sequelize.define("user", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING },
	firstName: { type: DataTypes.STRING, allowNull: false },
	secondName: { type: DataTypes.STRING, allowNull: false },
	role: { type: DataTypes.STRING, defaultValue: "ADMIN" },
});

const Sum = sequelize.define("sum", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	amount: { type: DataTypes.INTEGER, allowNull: false },
});

const Needed = sequelize.define("needed", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	firstName: { type: DataTypes.STRING, allowNull: false },
	secondName: { type: DataTypes.STRING, allowNull: false },
	totalSum: { type: DataTypes.STRING, allowNull: false },
	remainSum: { type: DataTypes.STRING, allowNull: false },
	img: { type: DataTypes.STRING },
});

const Heroes = sequelize.define("heroes", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	firstName: { type: DataTypes.STRING, allowNull: false },
	secondName: { type: DataTypes.STRING, allowNull: false },
	totalSum: { type: DataTypes.INTEGER, allowNull: false },
	img: { type: DataTypes.STRING, allowNull: false },
});

// -- Описание связей моделей друг с другом
User.hasMany(Sum);
Sum.belongsTo(User);

Needed.hasMany(Sum);
Sum.belongsTo(Needed);

module.exports = {
	User,
	Sum,
	Needed,
	Heroes,
};
