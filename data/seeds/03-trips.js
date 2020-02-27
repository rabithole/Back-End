exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('trips').del()
  //   .then(function () {
  //     // Inserts seed entries
      return knex('trips').insert([
        { id: 1, title: '7 Long Trail Section Hike', description: 'Hike from the Appalachian approach trail where the Long Trail southern terminus is for a 7 day adventure', is_private: 1, is_professional: 0, duration: '7 days', distance: '70 miles', date: '2020-06-01 08:00:00:000', trip_type: 'Backpacking' },
        {id: 2, title: '3 Day Midwest Tour', description: 'Travel the midwest on paved roads through central Illinois', is_private: 0, is_professional: 1, duration: '3 days', distance: '90 miles', date: '2020-06-01 08:00:00:000', trip_type: 'Bike Touring' },
        {id: 3, title: 'Packraft Snake River in Colorado', description: 'See the amazing Snake River in Colorado for 5 days', is_private: 0, is_professional: 1, duration: '5 days', distance: '70 miles', date: '2020-06-01 08:00:00:000', trip_type: 'Packrafting' },
      ]);
};
