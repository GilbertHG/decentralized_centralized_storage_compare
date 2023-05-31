const s3 = require('../configs/s3');

async function get(req, res, next) {
    res.json({'message': 'Inventory App "get" Rest API'});
}

async function getMultiple(req, res, next) {
    res.json({'message': 'Inventory App "get multiple" Rest API'});
}

async function post(req, res, next) {
    res.json({'message': 'Inventory App "get" Rest API'});
}

module.exports = {
    get,
    getMultiple,
    post,
};