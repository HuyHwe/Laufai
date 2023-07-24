'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('types', [
      {
        name: 'Nhạc low g lâu fai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nhạc Ngọt cực cháy 2023",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nhạc in đi sôi động phá đảo quán cafe",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  }
};
