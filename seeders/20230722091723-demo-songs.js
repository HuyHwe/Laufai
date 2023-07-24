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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "an thần",
        url: "static/music/An Thần ft Thắng  Low G  Rap Nhà Làm.mp3",
        type: 14,
        artist: "low g ft. thang",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cafe sữa Trà đá và Bún chả",
        url: "static/music/Cafe sữa Trà đá và Bún chả Hanoian Dreams  Low G  Rap Nhà Làm.mp3",
        type: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chung Cư",
        url: "static/music/Chung Cư  Low G.mp3",
        type: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dáng Xinh",
        url: "static/music/Dáng Xinh prod Trungng  Low G  Rap Nhà Làm.mp3",
        type: 1,
        artist: "low g prod Trungng",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flexin Trên Circle K 2",
        url: "static/music/Flexin Trên Circle K 2  Low G  Rap Nhà Làm.mp3",
        type: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flexin Trên Circle K",
        url: "static/music/Flexin trên Circle k.mp3",
        type: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Không Thích",
        url: "static/music/Không Thích  Low G  Rap Nhà Làm.mp3",
        type: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //  {
      //   name: "Không Thích",
      //   url: "static/music/y2mate.com - Button Beep FX 2 HD.mp3",
      //   type: 1,
      //   artist: "low g",
      //   nop:10,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },  {
      //   name: "Không Thích",
      //   url: "static/music/y2mate.com - Tiếng Beep dùng để thay thế các ngôn ngữ 18  Beep Sound Effect.mp3",
      //   type: 1,
      //   artist: "low g",
      //   nop:10,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      

    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('songs', null, {});

  }
};
