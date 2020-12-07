//require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors/safe");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

const { PORT = 4000 } = process.env;

const app = express();

app.use(cors());
app.use(morgan("common"));
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => console.log(colors.green.inverse(`Server listening on PORT ${PORT}`)))