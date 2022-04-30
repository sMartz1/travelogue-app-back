"use strict";
const { faker } = require("@faker-js/faker");

//Function receiving the number of Places to generate
const generatePlaces = async (amountOfRegs) => {

  const arrPlaces = await [...Array(amountOfRegs)].map((placeItem) => ({
    id: faker.datatype.uuid(),
    name: faker.address.cityName(),
    location: faker.address.nearbyGPSCoordinate().toString(),
    image_path: faker.image.city(),
    price: faker.commerce.price(1, 100, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  return arrPlaces;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrPlaces = await generatePlaces(30);
    await queryInterface.bulkInsert("places", arrPlaces);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("places", null, {});
  },
};
