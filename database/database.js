const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    password: '123',
    database: 'teste',
    host: 'localhost',
    port: 5432
})

pool.connect(function (err) {
    if (err) {
        throw err
    } else {
        console.log("conectado ao banco teste")
    }
})

module.exports = pool