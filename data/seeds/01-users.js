
exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('users').del()
  //   .then(function () {
  //     // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'nathansl2003', password: '$2a$05$kh4K1LSHTLpNOb.XltdLteNqL5ZjNeu4ZlPFE8IdQdNI7yShJUxCi' },
        {id: 2, username: 'jsmith', password: '$2a$05$ra60Fp67NnAUI01l9Zv1Ku0MN3PsbOqNoJrYyURKL.az54wdGb03W'},
        {id: 3, username: 'klock', password: '$2a$05$cwrsyaKfHYeXjwROPjDneuXOtaLyT9wrD4VD/DlBGuSpnCYP.W7aO'}
      ]);
};
