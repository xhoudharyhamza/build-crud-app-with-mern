require('dotenv').config()
let express = require("express");
let app = express();
require('./database/connection')
let router = require("./router/routes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
let port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
