
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('profiles').del()
  //   .then(function () {
  //     // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 1, title: 'Thru-hiking Expert', tagline: 'I am happiest in the wilderness', guide_specialty: 'Backpacking', age: 43, years_experience: 6, avatar_url: null },
        {id: 2, user_id: 2, title: 'Bike Touring the Scenic Routes', tagline: 'I love riding!', guide_specialty: 'Bike Touring', age: 29, years_experience: 10, avatar_url: null },
        {id: 3, user_id: 3, title: 'Packrafting With the Best', tagline: 'Water is my home', guide_specialty: 'Packrafting', age: 34, years_experience: 15, avatar_url: null }
      ]);
};
