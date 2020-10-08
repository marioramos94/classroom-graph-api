'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'Mario',
      last_name:'Ramos Santos',
      email: 'marioramos@gmail.com',
      document_type: 'DNI',
      gender:'MALE',
      document: '12345678',
      password: '$2a$10$DkeNHMm215CNqcnl.cepvOYNjBcTHjJUpMSr00lK4jMAp498n/4Sy',
      is_admin:true,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Oscar',
      last_name:'Caballero Santos',
      email: 'oscarcaballero@gmail.com',
      document_type: 'DNI',
      gender:'MALE',
      document: '76541234',
      is_admin:false,
      password: '$2a$10$DkeNHMm215CNqcnl.cepvOYNjBcTHjJUpMSr00lK4jMAp498n/4Sy',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Raul',
      last_name:'Sanchez',
      email: 'raulsanchez@gmail.com',
      document_type: 'DNI',
      gender:'MALE',
      is_admin:false,
      document: '12345678',
      password: '$2a$10$DkeNHMm215CNqcnl.cepvOYNjBcTHjJUpMSr00lK4jMAp498n/4Sy',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Edson',
      last_name:'Fiestas',
      email: 'edsonfiestas@gmail.com',
      document_type: 'DNI',
      gender:'MALE',
      is_admin:false,
      document: '12345678',
      password: '$2a$10$DkeNHMm215CNqcnl.cepvOYNjBcTHjJUpMSr00lK4jMAp498n/4Sy',
      created_at: new Date(),
      updated_at: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
