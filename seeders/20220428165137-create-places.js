"use strict";
const { faker } = require("@faker-js/faker");

const arrayFakeUserIds = [
  "1b347795-3cab-446b-991a-4aab6f7a169a",
  "70fe9514-12b9-44fb-ab0b-618884ec8710",
  "f9badfe9-f0fb-49f8-a8af-144f32d47bde",
  "b52e8306-8716-4d21-a947-4cf424adae30",
];

//Function receiving the number of Places to generate
const generatePlaces = async (amountOfRegs) => {
  return [...Array(amountOfRegs)].map(() => ({
    id: faker.datatype.uuid(),
    id_user: faker.random.arrayElement(arrayFakeUserIds),
    name: faker.address.cityName(),
    location: faker.address.nearbyGPSCoordinate().toString(),
    image_path: faker.image.city(),
    price: faker.commerce.price(1, 100, 0),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
};

module.exports = {
  async up(queryInterface, _Sequelize) {
    const arrPlaces = await generatePlaces(30);
    await queryInterface.bulkInsert("places", arrPlaces);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("places", null, {});
  },
};
