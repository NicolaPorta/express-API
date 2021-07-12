const jwt = require("jsonwebtoken");
require('dotenv').config();

const options = {
  expiresIn: "1h",
};

async function generateJWTToken(email, userId) {
  try {
    const payload = { email: email, _id: userId };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, options);
    return { error: false, token: token };
  } catch (error) {
    return { error: true };
  }
}

module.exports = { generateJWTToken };