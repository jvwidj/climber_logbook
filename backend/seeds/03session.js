/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('session').del()
  await knex('session').insert([
    {user_id:1, date:"2022-07-26", start_time:"14:52:00", end_time:"17:52:00", description:"test session", is_private:"false"},
    {user_id:2, date:"2022-07-26", start_time:"14:52:00", end_time:"17:52:00", description:"test session", is_private:"false"},
    {user_id:3, date:"2022-07-26", start_time:"14:52:00", end_time:"17:52:00", description:"test session", is_private:"false"}
  ]);
};
