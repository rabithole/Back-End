
exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.increments();
        tbl.text('username').notNullable().unique();
        tbl.text('password').notNullable();
      })
      .createTable('profiles', tbl => {
        tbl.increments();
        tbl.integer('user_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.text('title',256).notNullable();
        tbl.text('tagline',256).notNullable();
        tbl.text('guide_specialty',128).notNullable();
        tbl.integer('age').notNullable();
        tbl.integer('years_experience').notNullable();
        tbl.text('avatar_url');
        tbl.text('public_url').notNullable();
      })
      .createTable('trips', tbl => {
          tbl.increments();
          tbl.integer('user_id').notNullable().unsigned().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
          tbl.text('title', 256).notNullable();
          tbl.text('description').notNullable();
          tbl.integer('is_private', 1).notNullable();
          tbl.integer('is_professional', 1).notNullable();
          tbl.text('duration', 128).notNullable();
          tbl.text('distance', 128).notNullable();
          tbl.text('date').notNullable();
          tbl.text('trip_type', 64).notNullable();
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('trips')
      .dropTableIfExists('profiles')

  };
