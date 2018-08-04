module.exports = {
  up: (queryInterface, _DataTypes) => {
    queryInterface.createTable('Sections', {});
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Sections');
  },
};
