const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const secret = process.env.secret;
  const token = req.header('x-auth');
  if (!token) {
    return res.status(422).json({ err: 'access denied' });
  }
  try {
    let decoded = jwt.verify(token, secret);
    req.user = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ err: 'invalid token' });
  }
};
