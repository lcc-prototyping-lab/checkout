
exports.up = function(knex) {
	return knex.schema.createTable('years', table => {
		table.increments()
		table.string('name').notNullable().unique()
	})
}

exports.down = function(knex) {
	return knex.schema.dropTable('years')
}
