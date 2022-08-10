/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("friends", (table) => {
        table.increments().primary();
        
        table.integer("user_a").unsigned().notNullable();
        table.foreign("user_a").references("users.id")

        table.integer("user_b").unsigned().notNullable();
        table.foreign("user_b").references("users.id")

        table.integer("status").notNullable().defaultTo('2');

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("friends")
  
};
