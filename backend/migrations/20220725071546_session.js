const e = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("session", (table) =>{
        table.increments().primary();
        
        table.integer("user_id").unsigned();
        table.foreign("user_id").references("users.id")

        table.integer("climb_id").unsigned();
        table.foreign("climb_id").references("climb.id"); 

        table.timestamps(false, true);

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("session")
  
};
