const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const routers = require("./routers/index.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routers);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
