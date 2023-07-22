'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('songs', [
      {
        name: 'cắt kéo',
        url: "static/music/Cắt kéo trên Lênin  Low G  Rap Nhà Làm Lyric video.mp3",
        type: 1,
        artist: "low g",
        nop:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "an thần",
        url: "static/music/An Thần ft Thắng  Low G  Rap Nhà Làm.mp3",
        type: 1,
        artist: "low g ft. thang",
        nop:0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('songs', null, {});

  }
};
