const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


/**
 * List handler for reservation resources
 */

async function list(req, res) {
  const { date } = req.query;
  const data = await service.list(date);
  res.json({ data });
}

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

/**
 * V a l i d a t i o n
 */

//regex to validate date and time

function validationReservation(req, res, next) {
  const { data } = req.body;
  if (!data) {
    return next({ status: 400, message: "Data is missing" });
  }
  const requiredFields = [
    "first_name",
    "last_name",
    "mobile_number",
    "reservation_date",
    "reservation_time",
    "people",
  ];
  requiredFields.forEach((field) => {
    if (!data[field]) {
      return next({
        status: 400,
        message: `Reservation must include a ${field}`,
      });
    }
  });
  if (!Number.isInteger(data.people)) {
    next({
      status: 400,
      message: "people must be a number",
    });
  }
/**
 * D a t e   Validation
 */
  const dateFormat = /\d\d\d\d-\d\d-\d\d/;
  const timeFormat = /\d\d:\d\d/;
  if (!data.reservation_date.match(dateFormat)) {
    next({
      status: 400,
      message: "reservation_date must be a date",
    });
  }
  if (!data.reservation_time.match(timeFormat)) {
    next({
      status: 400,
      message: "reservation_time must be a time",
    });
  }
  next();
}

module.exports = {
  create: [validationReservation, asyncErrorBoundary(create)],
  list: [asyncErrorBoundary(list)],
};
//revisit later
//update: [asyncErrorBoundary(reviewExists), hasValidProperties, update],
//delete: [asyncErrorBoundary(reviewExists), destroy],
