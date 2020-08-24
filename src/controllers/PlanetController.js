require('../db/mongoose');

const starWarsAPI = require('../services/starWarsAPI');

const Planet = require('../models/planet');

const getFilmAppearances = async (name) => {
  try {
    const starWarsPlanet = await starWarsAPI.get(`/planets?search=${name}`);
    const film_appearances = starWarsPlanet.data.results[0]['films'].length;

    return film_appearances;
  } catch (e) {
    return 0;
  }
};

module.exports = {
  async create(req, res) {
    try {
      const film_appearances = await getFilmAppearances(req.body.name);
      const planet = await Planet.create({ ...req.body, film_appearances });
      res.status(201).send(planet);
    } catch (e) {
      res.status(500).send();
    }
  },
  async list(req, res) {
    try {
      const planets = await Planet.find({});
      res.status(200).send(planets);
    } catch (e) {
      res.status(500).send();
    }
  },
  async listOne(req, res) {
    const { id, name } = req.query;
    try {
      let planet;
      id ? (planet = await Planet.find({ _id: id })) : null;
      name ? (planet = await Planet.find({ name })) : null;
      res.status(200).send(planet);
    } catch (e) {
      res.status(500).send();
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const planet = await Planet.findOneAndDelete({ _id: id });
      if (!planet) {
        return res.status(404).send();
      }
      res.status(200).send(planet);
    } catch (e) {
      res.status(500).send();
    }
  },
};
