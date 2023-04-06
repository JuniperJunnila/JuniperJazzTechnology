module.exports = (req, res, next) => {
  res.send(`The route ${req.path} does not exist!`);
};
