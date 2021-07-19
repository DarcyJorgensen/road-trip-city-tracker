require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8889;
const userRoutes = require("./server/routes/users.routes");
const saved_tripsRoutes = require("./server/routes/saved_trips.routes");

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("api/saved_trips", saved_tripsRoutes);
app.use(express.static(__dirname + "/build"));
app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});
app.listen(PORT, () => console.log(`App listening on port ${port}!`));
