require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const modules = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

// -- Первый параметр - URL, по которому роутер должен обрабатываться. Второй параметр - сам роутер
app.use("/api", router);
// -- Middleware, который работает с ошибками обязательно должен идти и регистрироваться в самом конце
app.use(errorHandler);

const start = async () => {
	try {
		// -- Подключение к БД
		await sequelize.authenticate();
		// -- Сверяем состояние БД со схемой данных
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
