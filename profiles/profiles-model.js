const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
};

function find() {
    return db('profiles');
}

function findById(id) {
    return db('profiles').where({id}).first();
}

function add(data) {
    return db('profiles').insert(data);
}

function update(changes, id) {
    console.log(changes, id);
    return db('profiles').where('id', id).update(changes)
}
