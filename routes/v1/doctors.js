const express = require("express");
const router = express.Router();

const doctorsController = require("../../controllers/v1/doctorsController");

router.post("/register", doctorsController.doctorRegistration);

router.post("/login", doctorsController.login);

module.exports = router;
