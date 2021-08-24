const { generateJWTToken } = require('../../utils/generateJWTToken');
const { comparePasswords } = require('../../utils/bycript');
const { User } = require('../../DB');

async function requestLogin(req, res) {
    try {
        const {email, password} = req.body;
        if(!email && !password) {
            return res.status(400).json({
                error: "ErrorMissingCredentials",
                message: "Missing email and password",
            });
        }
        if(!email) {
            return res.status(400).json({
                error: "ErrorMissingCredentials",
                message: "Missing email",
            });
        }
        if(!password) {
            return res.status(400).json({
                error: "ErrorMissingCredentials",
                message: "Missing password",
            });
        }

        const user = await User.findOne({email: email});

        if (!user) {
            return res.status(404).json({
              error: "ErrorAccount",
              message: "Account not found",
            });
        }

        if (!user.active) {
            return res.status(400).json({
              error: "ErrorAccountActivation",
              message: "Your account is not active",
            });
        }

        const isValid = await comparePasswords(password, user.password);

        if (!isValid) {
            return res.status(400).json({
                error: "ErrorPasswordValidation",
                message: "Invalid password",
              });
        }

        const { error, token } = await generateJWTToken(user.email, user._id);
            if (error) {
            return res.status(500).json({
                error: "ErrorTokenGeneration",
                message: "Couldn't create access token. Please try again later",
            });
        }
        
        user.accessToken = token;
        await user.save();

        return res.send({
            message: "User logged in successfully",
            accessToken: token,
            name: user.name,
            surname: user.surname,
          });

    } catch(err) {
        return res.status(500).json({
            error: "ErrorLogin",
            message: "Couldn't login. Please try again later.",
        });
    }
};

module.exports = requestLogin;