const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require('../../DB');

async function validateToken(req, res) {
  
  const token = req.headers.authorization.split(" ")[1];
  let result;
  if (!token)
    return res.status(401).json({
      error: true,
      message: "Access token is missing",
    });

  const options = {
    expiresIn: "1h",
  };
  try {
    let user = await User.findOne({
      accessToken: token,
    });

    if (!user) {
      result = {
        error: true,
        message: `Authorization error`,
      };
      return res.status(403).json(result);
    }

    result = jwt.verify(token, process.env.JWT_SECRET, options);

    if (!user._id === result._id) {
      result = {
        error: true,
        message: `Invalid token`,
      };

      return res.status(401).json(result);
    }
    
    res.send({
        success: true,
        email: user.email,
        name: user.name,
        surname: user.surname
    });

  } catch (err) {
    console.error(err);
    if (err.name === "TokenExpiredError") {
      result = {
        error: true,
        message: `TokenExpired`,
      };
    } else {
      result = {
        error: true,
        message: `Authentication error`,
      };
    }
    return res.status(403).json(result);
  }
}

module.exports =  validateToken;