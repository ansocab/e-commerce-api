const { Pool } = require("pg");

const pool = new Pool({
    user: "anacaballero",
    host: "localhost",
    database: "ecommerce",
    password: "",
    port: 5432,
})

module.exports = pool