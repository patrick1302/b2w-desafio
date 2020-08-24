const request = require('supertest');
const app = require('../src/app');
const Planet = require('../src/models/planet');
const { planetTest, setupDatabase } = require('./fixtures/setup');

beforeEach(setupDatabase);

test('Should create a planet', async () => {
  const response = await request(app)
    .post('/planet')
    .send({
      name: 'test',
      terrain: 'test',
      climate: 'test',
    })
    .expect(201);

  const planet = await Planet.findById(response.body._id);
  expect(planet).not.toBeNull();
});

test('Should list all planets', async () => {
  await request(app).get('/planet').expect(200);
});

test('Should find a planet by name', async () => {
  const { name } = planetTest;
  await request(app).get(`/planet?name=${name}`).expect(200);
});

test('Should find a planet by id', async () => {
  const { _id } = planetTest;
  await request(app).get(`/planet?id=${_id}`).expect(200);
});

test('Should delete a planet by id', async () => {
  const { _id } = planetTest;
  await request(app).delete(`/planet/${_id}`).expect(200);
  const planet = await Planet.findById({ _id });
  expect(planet).toBeNull();
});
