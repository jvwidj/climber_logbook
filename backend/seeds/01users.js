/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username:"akon", password:"123", email:"a@gmail.com", fname:"aname", lname:"alast"},
    {username:"bkon", password:"123", email:"b@gmail.com", fname:"bname", lname:"blast"},
    {username:"ckon", password:"123", email:"c@gmail.com", fname:"cname", lname:"clast"},
    {username:"dkon", password:"123", email:"d@gmail.com", fname:"dname", lname:"dlast"}
  ]);
};
