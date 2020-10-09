const Patient = require("../../models/patient");
const Report = require("../../models/report");

// patient registration
module.exports.patientRegister = async function (req, res) {
  try {
    //check if the patient is already registered with give mobile no.
    let patient = await Patient.findOne({ mobile: req.body.mobile });
    if (!patient) {
      console.log(req.body);
      await Patient.create(req.body);
      return res.status(200).json({
        message: "new patient registered",
      });
    } else {
      return res.status(409).json({
        message: "this mobile number already exist",
        patient: patient,
      });
    }
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.createReport = async function (req, res) {
  try {
    // create report
    let patient = await Patient.findById(req.params.id);
    if (patient) {
      let report = await Report.create({
        doctor: req.user._id,
        patient: req.params.id,
        status: req.body.status,
        date: req.body.date,
      });
      patient.reports.push(report);
      patient.save();
      return res.status(200).json({
        message: "report created",
      });
    } else {
      return res.status(409).json({
        message: "this patient is not registered",
      });
    }
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.allReports = async function (req, res) {
  try {
    // check specified patient exist or not
    let patient = await (await Patient.findById(req.params.id)).populate({
      path: "reports",
      populate: {
        path: "doctor",
        select: "name registration_no -_id",
      },
    });

    if (patient) {
      // if exist return all reports of that patient
      return res.status(200).json({
        message: `Reports of ${patient.name} from oldest to latest`,
        reports: patient.reports,
      });
    } else {
      return res.status(409).json({
        message: "This Patient not Registered In this System",
      });
    }
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
