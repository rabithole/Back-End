
exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();
        tbl.text('username').notNullable().unique();
        tbl.text('password').notNullable();
      })
      .createTable('profiles', tbl => {
        tbl.increments();
        tbl.integer('user_id').unsigned().notNullable().references('users.id')
        tbl.text('title',256).notNullable();
        tbl.text('tagline',256).notNullable();
        tbl.text('guide_specialty',128).notNullable();
        tbl.integer('age').notNullable();
        tbl.integer('years_experience').notNullable();
        tbl.text('avatar_url');
      })
      .createTable('trips', tbl => {
          tbl.increments();
          tbl.text('title', 256).notNullable();
          tbl.text('description').notNullable();
          tbl.integer('is_private', 1).notNullable();
          tbl.integer('is_professional', 1).notNullable();
          tbl.text('duration', 128).notNullable();
          tbl.text('distance', 128).notNullable();
          tbl.text('date').notNullable();
          tbl.text('trip_type', 64).notNullable();
      })
      .createTable('images', tbl => {
          tbl.increments();
          tbl.text('image_url').unique();
      })
      .createTable('trips_images', tbl => {
          tbl.integer('trip_id').unsigned().notNullable().references('trips.id');
          tbl.integer('image_id').unsigned().references('images.id');
          tbl.integer('user_id').notNullable().unsigned().references('users.id');
          tbl.primary(['user_id', 'trip_id'])
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('trips_images')
      .dropTableIfExists('images')
      .dropTableIfExists('trips')
      .dropTableIfExists('profiles')
      .dropTableIfExists('users')
  };
