const Router = require("express");
const neededController = require("../controllers/neededController");
const router = new Router();

router.post("/create", neededController.create);
router.get("/", neededController.getAll);

module.exports = router;
