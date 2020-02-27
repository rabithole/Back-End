
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('images').del()
  //   .then(function () {
  //     // Inserts seed entries
      return knex('images').insert([
        {id: 1, image_url: ''}
      ]);
};