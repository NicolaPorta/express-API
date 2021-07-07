const { getToDoById } = require('../../controllers');

const getHandler = async (req, res, next) => {
    try {
      // set result to the res 
      res.result = await getToDoById(req,res);
      next();
    } catch (error) {
      next(error);
    }
};
module.exports = getHandler;