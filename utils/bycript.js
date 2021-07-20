const bcrypt = require('bcryptjs');

async function comparePasswords(password, userPassword) {
    try {
        return await bcrypt.compare(password, userPassword);
    } catch (error) {
        throw new Error("Comparing failed", error);
    }
};

async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error("Hashing failed", error);
    }
};

module.exports = {
    comparePasswords,
    hashPassword,
};