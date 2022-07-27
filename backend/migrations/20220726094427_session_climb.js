/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("session_climb", (table) => {
        table.increments().primary();

        table.integer("session_id").unsigned()
        table.foreign("session_id").references("session.id")

        table.integer("climb_id").unsigned()
        table.foreign("climb_id").references("climb.id")

        table.boolean("completed")
        table.integer("attempt")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("session_climb")
  
};
