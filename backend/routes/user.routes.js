const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/users.model");
const { blacklistModel } = require("../model/blacklist.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const userDetails = await userModel.findOne({ email });
    if (userDetails) {
      res.status(200).json({
        msg: "The new user has been registered",
        registeredUser: userDetails,
      });
    } else {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/;
      const passwordTrue = passwordRegex.test(pass);
      if (!passwordTrue) {
        res.status(400).json({
          msg: "Password must have at least 1 special char, 1 uppercase, 1 lowercase ,1 number and length is greater than or equal to 8",
          pass,
        });
      } else {
        bcrypt.hash(pass, 4, async (err, hash) => {
          if (!err) {
            const newUser = await new userModel({ ...req.body, pass: hash });
            newUser.save();
            res.status(200).json({
              msg: "The new user has been registered",
              registeredUser: req.body,
            });
          } else {
            res.status(400).json({
              err,
            });
          }
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      err,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).json({ error: "Please signup first" });
    }
    let isPassTrue = await bcrypt.compareSync(pass, user.pass);
    if (!isPassTrue) {
      res.status(200).json({ msg: "Please check you credential" });
    } else {
      const access_token = jwt.sign({ _id: user._id }, "user", {
        expiresIn: 120,
      });
      const refresh_token = jwt.sign({ email: "nsd111" }, "batch", {
        expiresIn: 300,
      });
      res
        .status(200)
        .json({ msg: "Login successful!", access_token, refresh_token });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

userRouter.get("/logout", async (req, res) => {
  const token = req.headers.authorization.trim().split(" ")[1];

  try {
    if (token) {
      const blacklistedToken = await blacklistModel(token);
      blacklistedToken.save();
      res.status(200).json({ msg: "User has been logged out" });
    } else {
      res.status(400).json({ msg: "Invailid token" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

userRouter.get("/regenerate", async (req, res) => {
  const token = req.headers.authorization.trim().split(" ")[1];
  try {
    const decoded = jwt.verify(token, "user");
    if (decoded) {
      const newToken = jwt.sign({ _id: user._id }, "user", {
        expiresIn: 120,
      });
      res.status(200).json({
        msg: "New token generated successfull",
        access_token: newToken,
      });
    } else {
      res.status(200).json({ msg: "failed to generate new token" });
    }
  } catch (error) {
    res.status(4000).json({ msg: error });
  }
});
module.exports = {
  userRouter,
};
