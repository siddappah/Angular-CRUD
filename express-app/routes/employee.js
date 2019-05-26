var express = require("express");
var router = express.Router();
var cors = require("cors");
var db = require("diskdb");
var path = require("path");
var _ = require("lodash");

var employeesJson = require("../json/employees.json");
// post employee

router.post("/add-employee", cors(), function(req, res, next) {
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
  db.employees.save(req.body);
  res.status(200).send({ status: 200, message: "Created success" });
  res
    .status(401)
    .send({ status: 401, message: "internal error", type: "internal" });
});

// Get employees
router.get("/get-employees", cors(), function(req, res, next) {
  res.send(employeesJson);
});
// Get employee
router.get("/view-employee/:id", cors(), function(req, res) {
  var empId = req.params.id;
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);
  var optinData = db.employees.findOne({ id: empId });
  res.send(optinData);
});

// Update an employee
router.put("/update-employee/:id", cors(), function(req, res, next) {
  db = db.connect(path.join(__dirname, "../json"), ["employees"]);

  var query = {
    id: req.params.id
  };
  var options = {
    multi: false,
    upsert: false
  };

  var updated = db.employees.update(query, req.body, options);
  res.send({ message: "successfully updated" });
});

router.delete('/delete-employee/:id', cors(), function (req, res, next) {
  db = db.connect(path.join(__dirname, '../json'), ['employees']);
  db.employees.remove({ id: req.params.id }, true);
  res.send({ message: 'Employee removed' });
});

module.exports = router;
