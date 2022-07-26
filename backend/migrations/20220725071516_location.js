const e = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("location", (table) => {
    table.increments().primary();
    table.boolean("is_outdoor").notNullable();
    table.string("location_name").notNullable();
    table.string("location_description");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("location")
};
