const _ = require('lodash');
const { Hero, Power, sequelize } = require('./../models');

module.exports.createHero = async (req, res, next) => {
  const { body, file } = req;

  if (file) {
    body.image = file.filename;
  }
  if (!body.superpowers) {
    body.superpowers = [];
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

module.exports.getHeroes = async (req, res, next) => {
  // const { limit = 10, offset = 0 } = req.query;

  try {
    const foundHeroes = await Hero.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      // limit,
      // offset,
      include: {
        model: Power,
        attributes: {
          exclude: ['description', 'fullDescription', 'createdAt', 'updatedAt'],
        },
        through: { attributes: [] },
      },
    });

    const singleFoundHeroes = {};
    foundHeroes.forEach(i => {
      singleFoundHeroes[i.id] = i;
      singleFoundHeroes[i.id].superpowers = [];
    });
    foundHeroes.forEach(i => {
      i['Powers.id'] &&
        singleFoundHeroes[i.id].superpowers.push(i['Powers.id']);
      delete i['Powers.id'];
    });

    res.status(200).send({ data: Object.values(singleFoundHeroes) });
  } catch (err) {
    next(err);
  }
};

module.exports.getHeroById = async (req, res, next) => {
  res.status(501).send('Not Implemented');
};

module.exports.updateHero = async (req, res, next) => {
  res.status(501).send('Not Implemented');
};

module.exports.deleteHero = async (req, res, next) => {
  res.status(501).send('Not Implemented');
};
