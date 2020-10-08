'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('teachers', [{
      name: 'Jose',
      last_name:'Agustin',
      code:'jagustin',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Carlos',
      last_name:'Huarcaya',
      code:'chuarcaya',
      created_at: new Date(),
      updated_at: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teachers', null, {});
  }
};
