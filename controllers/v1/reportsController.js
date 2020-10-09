const Report = require("../../models/report");

// list of all reports
module.exports.statusAllReports = async function (req, res) {
  try {
    // find specified status report exist or not
    console.log(req.params.status);
    let report = await Report.find({ status: req.params.status }).populate({
      path: "patient",
      select: "name address mobile",
    });

    console.log("report", report);

    // if reports with specifieed status exist
    if (report && report.length != 0) {
      return res.status(200).json({
        message: `List of all the reports with status: ${req.params.status}`,
        reports: report,
      });
    } else {
      return res.status(409).json({
        message: `there is no reports with status: ${req.params.status}`,
      });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};
