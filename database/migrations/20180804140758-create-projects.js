module.exports = {
  up: (queryInterface, _DataTypes) => {
    queryInterface.createTable('Projects', {});
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Projects');
  },
};
