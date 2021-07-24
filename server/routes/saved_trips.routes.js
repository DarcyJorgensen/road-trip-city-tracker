const express = require("express");
const router = express.Router();
const {
  addSavedTrips,
  deleteSavedTrips,
  byUserID,
} = require("../models/saved_trips.model");

router.post("/add", (req, res) => {
  const { user_id, id } = req.body;
  if (
    user_id &&
    id &&
    city_name &&
    weather_main &&
    weather_description &&
    main_temp
  ) {
    return addSavedTrips(res, user_id, id);
  }
  return res.send({
    success: false,
    error: "Invalid data provided",
    data: null,
  });
});

router.delete("/delete/:user_id/: id", (req, res) => {
  const { user_id, id } = req.params;
  return deleteSavedTrips(res, user_id, id);
});

router.get("/user/:user_id", (req, res) => {
  return byUserID(res, req.params.user_id);
});

module.exports = router;
