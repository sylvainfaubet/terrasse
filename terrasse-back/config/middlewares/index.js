const logEnabled = false;

module.exports = (req, res, next) => {
  if (logEnabled) {
    console.log("req", req);
    console.log("res", res);
  }
  next();
};
