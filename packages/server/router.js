const { Router } = require('express');
const heroRouter = require('./routes/heroRouter');

const router = Router();

router.use('/heroes', heroRouter);

module.exports = router;
