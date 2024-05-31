const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  try {
    let token;
    // check header authorization
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            error: "User is not authorized",
          });
        }

        req.user = decoded.user;
        next();
      });
    }

    if (!token) {
      return res.status(401).json({
        error: "User is not authorized or token is missing",
      });
    }
  } catch (error) {
    return res.status(401).json({ error });
  }
};

module.exports = validateToken;
