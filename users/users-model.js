const db = require('../data/db-config');

module.exports = {
    add,
    findById,
    findBy,
    getUsers,
    getUser,
    getUserData,
    getPublicProfileData,
    getProfileData,
    getTripData,
    remove
};

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

function findById(id) {
    return db('users').where({id}).first();
}

function findBy(user) {
    return db('users').where(user);
}

function getUsers() {
    return db('users').select('users.id', 'users.username');
}

function getUser(id) {
    return db('users').select('users.id', 'users.username').where({id}).first();
}

function getUserData(id)
{
    console.log('pre-getUserData query, ID: ', id);
    return db('users')
    .leftJoin('profiles', 'users.id', '=', 'profiles.user_id')
    .leftJoin('trips', 'users.id', '=', 'trips.user_id')
    .select('users.id as user_id', 'users.username', 'profiles.id as profile_id', 'profiles.title as profile_title', 'profiles.tagline', 'profiles.guide_specialty', 'profiles.age', 'profiles.years_experience', 
    'profiles.avatar_url', 'trips.id as trip_id', 'trips.title as trips_title', 'trips.description', 'trips.is_private', 'trips.is_professional', 'trips.duration', 'trips.distance', 
    'trips.date', 'trips.trip_type')
    .where('users.id', parseInt(id))
}

function  getPublicProfileData(id) {
 db('profiels').where('profiles.user_id'), parseInt(id);
}


function getProfileData(id)
{
    return db('profiles').where('profiles.user_id', parseInt(id));
}

function getTripData(id)
{
    return db('trips').where('trips.user_id', parseInt(id));
}

function remove(id) 
{
    return db('users').where('id', id).del();
 }

