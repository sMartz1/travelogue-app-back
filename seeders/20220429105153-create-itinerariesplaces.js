"use strict";
const { faker } = require("@faker-js/faker");
const { Place, Itinerary } = require("../models");

//Function receiving the number of Places to generate
const generateItinerariesPlaces = async (amountOfRegs) => {
  const allPlaces = await Place.findAll();
  const allitineraries = await Itinerary.findAll();

  const arrayPlaces = [];
  const arrayItineraries = [];

  allPlaces.forEach((e) => arrayPlaces.push(e.id));
  allitineraries.forEach((e) => arrayItineraries.push(e.id));

  return [...Array(amountOfRegs)].map(() => ({
    id: faker.datatype.uuid(),
    id_itinerary: faker.random.arrayElement(arrayItineraries),
    id_place: faker.random.arrayElement(arrayPlaces),
    date_place: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

module.exports = {
  async up(queryInterface, _Sequelize) {
    const arrItineraries = await generateItinerariesPlaces(50);
    await queryInterface.bulkInsert("itineraryplace", arrItineraries);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("itineraryplace", null, {});
  },
};
