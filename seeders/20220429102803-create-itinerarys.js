"use strict";
const { faker } = require("@faker-js/faker");

//Function receiving the number of Places to generate
const generateItineraries = async (amountOfRegs) => {
  return [...Array(amountOfRegs)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.random.words(3),
    start_location: faker.address.nearbyGPSCoordinate().toString(),
    end_location: faker.address.nearbyGPSCoordinate().toString(),
    price: faker.commerce.price(1, 100, 0),
    user_id: faker.datatype.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

module.exports = {
  async up(queryInterface, _Sequelize) {
    const arrItineraries = await generateItineraries(30);
    await queryInterface.bulkInsert("itineraries", arrItineraries);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("itineraries", null, {});
  },
};
