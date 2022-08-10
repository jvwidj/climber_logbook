/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friends').del()
  await knex('friends').insert([
    {user_a:1, user_b:2, status:2},
    {user_a:1, user_b:3, status:2},
    {user_a:2, user_b:1, status:2}
  ]);
};
