/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('climb').del()
  await knex('climb').insert([
    {route_name:"Via Spericolata", grade:"5", type:"sport", description:"Monkey Buttress - Entrance Crag", location_id:1},
    {route_name:"Jujube's Memory", grade:"6a+", type:"sport", description:"Monkey Buttress - Entrance Crag", location_id:1},
    {route_name:"No! No! No!", grade:"5", type:"sport", description:"Monkey Buttress - Entrance Crag", location_id:1}
  ]);
};
