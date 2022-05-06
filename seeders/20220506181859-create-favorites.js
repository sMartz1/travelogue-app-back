"use strict";
const { faker } = require("@faker-js/faker");
const { Place, Itinerary } = require("../models");

const arrayFakeUserIds = [
  "1b347795-3cab-446b-991a-4aab6f7a169a",
  "70fe9514-12b9-44fb-ab0b-618884ec8710",
  "f9badfe9-f0fb-49f8-a8af-144f32d47bde",
  "b52e8306-8716-4d21-a947-4cf424adae30",
];

//Function receiving the number of Places to generate
const generateFavorites = async (amountOfRegs) => {
  const allPlaces = await Place.findAll();
  const arrayPlaces = [];
  allPlaces.forEach((e) => arrayPlaces.push(e.id));

  const allitineraries = await Itinerary.findAll();
  const arrayItineraries = [];
  allitineraries.forEach((e) => arrayItineraries.push(e.id));
  
  const arrayFavPlaces =  [...Array(amountOfRegs)].map(() => ({
    id: faker.datatype.uuid(),
    id_user: faker.random.arrayElement(arrayFakeUserIds),
    id_place: faker.random.arrayElement(arrayPlaces),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  const arrayFavItineraries =  [...Array(amountOfRegs)].map(() => ({
    id: faker.datatype.uuid(),
    id_user: faker.random.arrayElement(arrayFakeUserIds),
    id_itinerary: faker.random.arrayElement(arrayItineraries),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  return [arrayFavPlaces,arrayFavItineraries]
};

module.exports = {
  async up(queryInterface, _Sequelize) {
    const arrItineraries = await generateFavorites(50);
    await queryInterface.bulkInsert("favoriteplaces", arrItineraries[0]);
    await queryInterface.bulkInsert("favoriteitineraries", arrItineraries[1]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("favoriteplaces", null, {});
    await queryInterface.bulkDelete("favoriteitineraries", null, {});
  },
};
