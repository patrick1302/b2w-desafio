const mongoose = require('mongoose');
const Planet = require('../../src/models/planet');

const planetTest = {
  _id: new mongoose.Types.ObjectId(),
  name: 'Kamino',
  climate: 'temperate',
  terrain: 'ocean',
};

const setupDatabase = async () => {
  await Planet.deleteMany();
  await new Planet(planetTest).save();
};

module.exports = { planetTest, setupDatabase };
