require("dotenv").config();
const express = require("express");
const { connection } = require("./connection/db");
const { userRouter } = require("./routes/user.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "This is homepage!" });
});

app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`server is connected to Db`);
    console.log(`server is running port at ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
