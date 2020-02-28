const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
};

function find() {
    return db('trips');
}

function findById(id) {
    return db('trips').where({id});
}

function add(data) {
    return db('trips').insert(data);
}
