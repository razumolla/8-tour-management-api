const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

// database connection
mongoose.connect(process.env.LOCAL_DATABASE).then(() => {
  console.log("Database Connection Established");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Tour management app listening on port ${port}`);
});
