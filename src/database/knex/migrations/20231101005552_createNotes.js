exports.up = knex =>
  knex.schema.createTable('notes', table => {
    table.increments('id')
    table.text('title')
    table.text('description')
    table.interger('user_id').references('id').inTable('users')

    time.timestamp('created_at').default(knex.fn.now())
    time.timestamp('updated_at').default(knex.fn.now())
  })

exports.down = knex => knex.schema.dropTable('notes')
