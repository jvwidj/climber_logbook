const e = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("climb", (table) => {
        table.increments().primary();
        table.string("route_name");
        table.string("grade");
        table.string("type");
        table.string("description");
        table.integer("location_id").unsigned();
        table.foreign("location_id").references("location.id"); 
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("climb")
};
