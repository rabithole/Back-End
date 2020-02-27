
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('trips_images').del()
  //   .then(function () {
  //     // Inserts seed entries
      return knex('trips_images').insert([
        {user_id: 1, trip_id: 1, image_id: null},
        {user_id: 2, trip_id: 2, image_id: null},
        {user_id: 3, trip_id: 3, image_id: null},
      ]);
};
