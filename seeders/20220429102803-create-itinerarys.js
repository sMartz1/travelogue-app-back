"use strict";
const { faker } = require("@faker-js/faker");

//Function receiving the number of Places to generate
const generateItineraries = async (amountOfRegs) => {

  const arrItineraries = await [...Array(amountOfRegs)].map((placeItem) => ({
    id: faker.datatype.uuid(),
    name: faker.random.words(3),
    start_location: faker.address.nearbyGPSCoordinate().toString(),
    end_location: faker.address.nearbyGPSCoordinate().toString(),
    price: faker.commerce.price(1, 100, 0),
    user_id:faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  return arrItineraries;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrItineraries = await generateItineraries(30);
    await queryInterface.bulkInsert("itineraries", arrItineraries);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("itineraries", null, {});
  },
};