const ApiError = require("../error/ApiError");
const uuid = require("uuid");
const path = require("path");
const bcrypt = require("bcrypt");

const { Needed } = require("../models/models");

const generateJwt = (id, email, role, firstName, secondName) => {
	return jwt.sign(
		{ id: id, email: email, role: role, firstName, secondName },
		process.env.SECRET_KEY,
		{ expiresIn: "24h" } // -- Сколько времени живет токен
	);
};

class NeededController {
	async create(req, res, next) {
		// -- Из запроса получаем email и пароль
		const { firstName, secondName, totalSum, remainSum } = req.body;
		console.log(req.files);
		// -- Проверка, существует ли пользователь с таким email в системе
		const candidate = await Needed.findOne({
			where: { firstName, secondName },
		});
		if (candidate) {
			return next(ApiError.badRequest("Такой пользователь уже существует"));
		}

		// const { img } = req.files;
		// let fileName = uuid.v4() + ".jpg";
		// img.mv(path.resolve(__dirname, "..", "static", fileName));

		// -- Создание пользователя
		// const needed = await Needed.create({
		// 	firstName,
		// 	secondName,
		// 	totalSum,
		// 	remainSum,
		// 	img,
		// });

		// return res.json({ needed });
	}

	async getAll(req, res, next) {
		const neededs = await Needed.findAll();

		return res.json({ neededs });
	}
}

module.exports = new NeededController();
