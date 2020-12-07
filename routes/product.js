const express = require("express");
const router = express.Router();
const pool = require("../db")

router.get("/", async (req, res) => {
    const result = await pool.query("SELECT * from products");
    res.send({ success: true, result});
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * from products WHERE id=$1", [id]);
    const rows = result.rows;
    res.json({ success: true, rows});
})

module.exports = router