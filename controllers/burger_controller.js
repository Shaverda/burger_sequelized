var express = require('express');
var db = require('../models');
var router = express.Router();


router.get("/", (req, res) => {
	db.Burger.findAll({}).then(function(data) {
		res.render("index", {burgers: data});
	});
});

router.post("/", (req, res) => {
	db.Burger.create({
		burger_name: req.body.name
	}).then(() => {
		res.redirect("/");
	});
});

router.put("/:id", (req, res) => {
	db.Burger.update({
		devoured: true
	}, {
		where: {
			id: req.params.id
		}
	}).then(() => {
		res.redirect("/");
	});
});

module.exports = router;

