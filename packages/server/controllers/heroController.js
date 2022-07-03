const { Hero } = require('./../models');

module.exports.createHero = async (req, res, next) => {
  const { body, file } = req;

  body.image = file.filename;
  const powers = body.superpowers
    .split('')
    .filter(s => s !== '[' && s !== ']')
    .join('')
    .split(',')
    .map(i => Number(i));

  try {
    // добавить основную инфу в супергерои
    const createdHero = await Hero.create(body);
    // добавить инфу о суперсилах созданного героя в таблицу связи
    const createdHeroPowers = await createdHero.setPowers(powers);
    // console.log('createdHeroPowers', createdHeroPowers);
    rss.stsatus(501).send('Not Implemented');
  } catch (err) {
    next(err);
  }
};

module.exports.getHeroes = async (req, res, next) => {
  res.status(501).send('Not Implemented');
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
