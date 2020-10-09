const express = require("express");
const router = express.Router();
const passport = require("passport");

const patientsController = require("../../controllers/v1/patientsController");

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientsController.patientRegister
);

router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patientsController.createReport
);

router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  patientsController.allReports
);

module.exports = router;
