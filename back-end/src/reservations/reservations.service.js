const knex = require("../db/connection");


//then might not be needed, review later when i understand functionality
function create(newReservation) {
    return knex("reservations")
    .insert(newReservation, '*')
    .then((data) => data[0])
  }

  function list(reservation_date) {
    return knex("reservations")
    .select("*")
    .where({"reservation_date" : reservation_date})
    .orderBy("reservation_time")
  }



module.exports = {
   // read,
   // readReviewsAndCritics,
    create,
    list,
    //delete: destroy,
  };
  