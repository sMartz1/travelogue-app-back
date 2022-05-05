"use strict";
const { faker } = require("@faker-js/faker");

//Function receiving the number of Places to generate
const generatePlaces = async (amountOfRegs) => {
  return [...Array(amountOfRegs)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.address.cityName(),
    location: faker.address.nearbyGPSCoordinate().toString(),
    image_path: faker.image.city(),
    price: faker.commerce.price(1, 100, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

module.exports = {
  async up(queryInterface,_Sequelize) {
    const arrPlaces = await generatePlaces(30);
    await queryInterface.bulkInsert("places", arrPlaces);
  },

  async down(queryInterface,_Sequelize) {
    await queryInterface.bulkDelete("places", null, {});
  },
};
