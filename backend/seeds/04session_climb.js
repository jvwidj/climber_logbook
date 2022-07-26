/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('session_climb').del()
  await knex('session_climb').insert([
    {session_id:1, climb_id:1},
    {session_id:2, climb_id:1},
    {session_id:3, climb_id:1}
  ]);
};
