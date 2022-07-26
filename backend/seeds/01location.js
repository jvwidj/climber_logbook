/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('location').del()
  await knex('location').insert([
    {is_outdoor:"true", location_name:"Monkey Buttress", location_description:"Outdoor climbing spot in Hong Kong island"},
    {is_outdoor:"true", location_name:"Black Crag", location_description:"Outdoor climbing spot in Hong Kong island"},
    {is_outdoor:"true", location_name:"Beacon Hill", location_description:"Outdoor climbing spot in Kowloon"},
    {is_outdoor:"true", location_name:"Ma Tai Stream", location_description:"Outdoor climbing spot in New Territory"},
    {is_outdoor:"false", location_name:"Verm City", location_description:"Indoor climbing gym in Hong Kong island"},
    {is_outdoor:"false", location_name:"Campus", location_description:"Indoor climbing gym in Kowloon"},
  ]);
};
