const router = require('express').Router();
const Player = require('../../models/Player');

// endpoint: /api/players
router.get("/", async (req,res) => {
  const players = await Player.findAll()
  res.status(200).json(players)
})

// endpoint: /api/players/ fullUrl: http://chessapp.com/api/players
router.post("/", async (req,res) => {
  try {
    const newplayer = await Player.create(req.body)
    res.status(200).json(newplayer)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: error})
  }
})

module.exports = router