const { Router } = require('express');
const heroRouter = require('./routes/heroRouter');
const powerRouter = require('./routes/powerRouter');

const router = Router();

router.use('/heroes', heroRouter);
router.use('/powers', powerRouter);

module.exports = router;
