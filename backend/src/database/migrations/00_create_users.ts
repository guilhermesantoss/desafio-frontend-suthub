import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('users');
}