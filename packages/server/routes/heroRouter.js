const { Router } = require('express');
const { heroController } = require('../controllers');
const { uploadFile } = require('../middleware');

const heroRouter = Router();

heroRouter
  .route('/')
  .post(/*uploadFile.uploadHeroPhoto, */ heroController.createHero)
  .get(heroController.getHeroes);

heroRouter
  .route('/:heroId')
  .get(heroController.getHeroById)
  .patch(heroController.updateHero)
  .delete(heroController.deleteHero);

module.exports = heroRouter;
