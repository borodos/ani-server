//! -- Файл index.js будет объединяь все маршруты

const Router = require("express");
const router = new Router();

// -- Эти роутеры (маршруты) сопоставляем с соответствующими роутами
const userRouter = require("./userRouter");
const neededRouter = require("./neededRouter");

router.use("/user", userRouter);
router.use("/needed", neededRouter);

module.exports = router;
