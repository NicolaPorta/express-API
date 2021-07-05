async function getToDoList(res, method, list) {
    method();
    res.json(list);
};

module.exports = getToDoList;