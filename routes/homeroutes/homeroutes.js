const router = require('express').Router();
const Player = require('../../models/Player');

// endpoint: /api/players
router.get("/home", async (req,res) => {
  res.sendFile("index.html")
})

// endpoint: /api/players/
router.get("/", async (req,res) => {
  try {
    const newplayer = await Player.create(req.body)
    res.status(200).json(newplayer)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: error})
  }
})

module.exports = router