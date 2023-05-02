const router = require('express').Router();
const playerRoutes = require('./playerRoutes');
// const pieceRoutes = require('./pieceRoutes');

router.use('/players', playerRoutes);
// router.use('/pieces', pieceRoutes);

module.exports = router;