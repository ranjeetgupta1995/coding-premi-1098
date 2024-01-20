const access = (roleArray) => {
  return (req, res, next) => {
    if (roleArray.includes(req.role)) {
      next();
    } else {
      res.status(200).json({ msg: "you are not authorised to access" });
    }
  };
};

module.exports = {
  access,
};
