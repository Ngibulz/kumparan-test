const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

// test
app.get("/", (req, res) => {
  res.json({ message: "test 123" });
});

require("./routes/articleRoutes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports = app;
