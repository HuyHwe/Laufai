'use strict';

/** @type_id {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('songs', [
      {
        name: 'cắt kéo',
        url: "static/music/lowg/Cắt kéo trên Lênin  Low G  Rap Nhà Làm Lyric video.mp3",
        type_id: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "an thần",
        url: "static/music/lowg/An Thần ft Thắng  Low G  Rap Nhà Làm.mp3",
        type_id: 1,
        artist: "low g ft. thang",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cafe sữa Trà đá và Bún chả",
        url: "static/music/lowg/Cafe sữa Trà đá và Bún chả Hanoian Dreams  Low G  Rap Nhà Làm.mp3",
        type_id: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chung Cư",
        url: "static/music/lowg/Chung Cư  Low G.mp3",
        type_id: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dáng Xinh",
        url: "static/music/lowg/Dáng Xinh prod Trungng  Low G  Rap Nhà Làm.mp3",
        type_id: 1,
        artist: "low g prod Trungng",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flexin Trên Circle K 2",
        url: "static/music/lowg/Flexin Trên Circle K 2  Low G  Rap Nhà Làm.mp3",
        type_id: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Flexin Trên Circle K",
        url: "static/music/lowg/Flexin trên Circle k.mp3",
        type_id: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Không Thích",
        url: "static/music/lowg/Không Thích  Low G  Rap Nhà Làm.mp3",
        type_id: 1,
        artist: "low g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "4s",
        url: "static/music/indi/4s.mp3",
        type_id: 3,
        artist: "Cá Hồi Hoang",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Acid 8",
        url: "static/music/indi/Acid8.mp3",
        type_id: 3,
        artist: "Cá Hồi Hoang",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "anh sẽ ôm em đến hết mùa hoa rơi",
        url: "static/music/indi/Anh sẽ ôm em đến hết mùa hoa rơi.mp3",
        type_id: 3,
        artist: "Chủ tịch Kim",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Beertalks",
        url: "static/music/indi/Beertalks.mp3",
        type_id: 3,
        artist: "Cá Hồi Hoang",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "WAVE ALPHA",
        url: "static/music/indi/WAVE ALPHA.mp3",
        type_id: 3,
        artist: "7UPPERCUTS",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "(tôi) ĐI TRÚ ĐÔNG",
        url: "static/music/ngot/(tôi) ĐI TRÚ ĐÔNG.mp3",
        type_id: 2,
        artist: "Ngọt",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "MẾU MÁO (T.T)",
        url: "static/music/ngot/MẾU MÁO (T.T).mp3",
        type_id: 2,
        artist: "Ngọt",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Drama Queen",
        url: "static/music/ngot/Drama Queen.mp3",
        type_id: 2,
        artist: "Ngọt",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Kẻ thù",
        url: "static/music/ngot/Kẻ thù.mp3",
        type_id: 2,
        artist: "Ngọt",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Một ngày không mưa",
        url: "static/music/ngot/Một ngày không mưa.mp3",
        type_id: 2,
        artist: "Ngọt",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Xin cho tôi",
        url: "static/music/ngot/Xin cho tôi.mp3",
        type_id: 2,
        artist: "Ngọt",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('songs', null, {});

  }
};
