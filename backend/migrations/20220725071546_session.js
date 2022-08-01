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

        table.integer("location_id").unsigned();
        table.foreign("location_id").references("location.id")

        table.date("date");
        table.time("start_time");
        table.time("end_time");

        table.string("description");
        table.boolean("is_private");
        

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("session")
  
};
