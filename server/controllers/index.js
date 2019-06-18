/**
 * GET /api
 *
 */
exports.indexController = (req, res) => {
  if (req.query && req.query.error) {
    const err = new Error('There was an error!');
    err.statusCode = 444;

    throw err;
  }

  return res.sendStatus(200);
};
