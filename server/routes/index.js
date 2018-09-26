const express = require("express");
const router = express.Router();

router.get("/subjects", (req, res) => {
  res.json([
    {
      id: 1,
      name: 'cars'
    },
    {
      id: 2,
      name: 'jeeps'
    }
  ]);
});

module.exports = router;