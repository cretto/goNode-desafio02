module.exports = {
  index(req, res, next) {
    try {
      return res.render('dashboard/index');
    } catch (err) {
      return next(err);
    }
  },
};
