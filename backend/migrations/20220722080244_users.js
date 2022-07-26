/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) =>{
        table.increments().primary();
        table.string("username").unique().notNullable();
        table.string("password").notNullable();
        table.string("email").notNullable();
        table.string("fname");
        table.string("lname");

        table.timestamps(false, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users")
};
