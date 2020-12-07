const express = require("express");
const router = express.Router();
const pool = require("../db")

router.get("/", async (req, res) => {
    const result = await pool.query("SELECT * from users");
    res.send({ success: true, result});
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * from users WHERE id=$1", [id]);
    res.json({ success: true, result});
})

module.exports = router