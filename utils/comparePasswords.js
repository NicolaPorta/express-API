const bcrypt = require('bcryptjs');

async function comparePasswords(password, userPassword) {
    try {
        return await bcrypt.compare(password, userPassword);
    } catch (error) {
        throw new Error("Comparing failed", error);
    }
};

module.exports = comparePasswords;
