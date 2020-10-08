'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courses', [{
      name: 'Inovacion de Productos 1',     
      code:'IP1',
      teacher_id:2,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
        name: 'Inteligencia Demasiado Artificial',     
        code:'IDA',
        teacher_id:1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Marvin Avanzado 1',     
        code:'MA1',
        teacher_id:2,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Human Learning',     
        code:'HL',
        teacher_id:1,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'Encriptando Elastic Search',     
        code:'EES',
        teacher_id:1,
        created_at: new Date(),
        updated_at: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {});
  }
};
