const { toDos } = require('../../controllers');

const getHandler = async (req, res, next) => {
    try {
      // set result to the res 
      res.result = await toDos.editToDoById(req,res);
      next();
    } catch (error) {
      next(error);
    }
};
module.exports = getHandler;