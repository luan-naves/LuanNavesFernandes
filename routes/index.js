const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


const router = express.Router();
const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', function (req, res, next) {
    mysql.createConnection({host: process.env.MYSQL_HOST, user: process.env.MYSQL_USER ,password: process.env.MYSQL_PASSWORD,
        database: 'backend-ii-express-mysql', port: process.env.MYSQL_PORT
    }).then((connection) => {
        connection.query('SELECT * FROM clientes;')
            .then((result) => {
                res.send(result[0]);
            });
    });
});
module.exports = router;
