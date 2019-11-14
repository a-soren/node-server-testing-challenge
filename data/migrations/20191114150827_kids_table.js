
exports.up = function(knex) {
  return knex.schema.createTable('kids', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
      tbl.string('age', 3);
      tbl.boolean('In school', false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('kids');
};
