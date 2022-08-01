/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('session').del()
  await knex('session').insert([
    {user_id:1, location_id:5, date:"2022-07-26", start_time:"14:52:00", end_time:"17:52:00", description:"test session", is_private:"false"},
    {user_id:2, location_id:6, date:"2022-07-26", start_time:"14:52:00", end_time:"17:52:00", description:"test session", is_private:"false"},
    {user_id:3, location_id:5, date:"2022-07-26", start_time:"14:52:00", end_time:"17:52:00", description:"test session", is_private:"false"}
  ]);
};
