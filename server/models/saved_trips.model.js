const query = require("../config/mysql.config");

async function byUserID(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const savedTrips = await query(
      "SELECT * FROM saved_trips WHERE user_id = ?",
      [user_id]
    );
    json = { ...json, success: true, data: savedTrips };
  } catch (err) {
    json.error = "Oops! Something went wrong..";
  } finally {
    return res.send(json);
  }
}

async function bySavedTripsID(res, id) {
  let json = { success: false, error: null, data: null };
  try {
    const savedTrips = await query("SELECT * FROM saved_trips WHERE id = ?", [
      id,
    ]);
    json = { ...json, success: true, data: savedTrips[0] };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

async function addSavedTrips(res, user_id, id) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSER INTO saved_trips (user_id, id, city_name, weather_main, weather_description, main_temp) VALUES (?,?,?,?,?,?)",
      [user_id, id, city_name, weather_main, weather_description, main_temp]
    );
    id = { ...id, id: result.insertID, user_id };
    json = { ...json, success: true, data: id };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

async function deleteSavedTrips(res, user_id, id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM savedTrips WHERE user_id = ? AND id = ?", [
      user_id,
      id,
    ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

async function deleteByUserID(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM saved_trips WHERE user_id = ?"[user_id]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = {
  bySavedTripsID,
  byUserID,
  addSavedTrips,
  deleteByUserID,
  deleteSavedTrips,
};
