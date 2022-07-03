const { Router } = require('express');
const { heroController } = require('../controllers');

const heroRouter = Router();

heroRouter
  .route('/')
  .post(heroController.createHero)
  .get(heroController.getHeroes);

heroRouter
  .route('/:heroId')
  .get(heroController.getHeroById)
  .patch(heroController.updateHero)
  .delete(heroController.deleteHero);

module.exports = heroRouter;
