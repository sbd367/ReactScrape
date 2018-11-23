const router = require("express").Router();
const articleController = require("../../Controllers/articleController");

router.route("/")
    .get(articleController.findAll)

module.exports = router