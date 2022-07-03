'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'powers',
      [
        {
          description: 'can fly',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'has eye laser',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'strong',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'amphibian',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'fast',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('powers', null, {});
  },
};
