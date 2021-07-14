const { generateJWTToken } = require('../../utils/generateJWTToken');
const comparePasswords = require('../../utils/comparePasswords');
const { User } = require('../../DB');

async function requestLogin(req, res) {
    try {
        const {email, password} = req.body;
        
        if(!email || !password) {
            return res.status(400).json({
                error: true,
                message: "Cannot authorize user.",
            });
        }

        const user = await User.findOne({email: email});

        if (!user) {
            return res.status(404).json({
              error: true,
              message: "Account not found",
            });
        }

        if (!user.active) {
            return res.status(400).json({
              error: true,
              message: "You must verify your email to activate your account",
            });
        }

        const isValid = await comparePasswords(password, user.password);

        if (!isValid) {
            return res.status(400).json({
                error: true,
                message: "Invalid credentials",
              });
        }

        const { error, token } = await generateJWTToken(user.email, user._id);
            if (error) {
            return res.status(500).json({
                error: true,
                message: "Couldn't create access token. Please try again later",
            });
        }
        
        user.accessToken = token;
        await user.save();

        return res.send({
            success: true,
            message: "User logged in successfully",
            accessToken: token,
            name: user.name,
            surname: user.surname,
          });

    } catch(err) {
        return res.status(500).json({
            error: true,
            message: "Couldn't login. Please try again later.",
        });
    }
};

module.exports = requestLogin;