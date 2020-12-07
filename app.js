const express = require("express");
const morgan = require("morgan");
const colors = require("colors/safe");

const { PORT = 4000 } = process.env;
const app = express();

app.use(morgan("common"));
app.use(express.json());

app.listen(PORT, () => console.log(colors.green.inverse(`Server listening on PORT ${PORT}`)))