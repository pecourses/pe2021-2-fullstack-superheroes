const _ = require('lodash');
const { Hero, sequelize } = require('./../models');

module.exports.createHero = async (req, res, next) => {
  const { body, file } = req;

  if (file) {
    body.image = file.filename;
  }

  const t = await sequelize.transaction();
  try {
    const createdHero = await Hero.create(body, { transaction: t });
    const createdHeroPowers = await createdHero.setPowers(body.superpowers, {
      transaction: t,
    });
    t.commit();
    const preparedHero = _.omit(createdHero.get(), ['createdAt', 'updatedAt']);

    preparedHero.superpowers = body.superpowers;
    res.status(200).send(preparedHero);
  } catch (err) {
    t.rollback();
    next(err);
  }
};

module.exports.getHeroes = async (req, res, next) => {};

module.exports.getHeroById = async (req, res, next) => {
  res.status(501).send('Not Implemented');
};

module.exports.updateHero = async (req, res, next) => {
  res.status(501).send('Not Implemented');
};

module.exports.deleteHero = async (req, res, next) => {
  res.status(501).send('Not Implemented');
};
