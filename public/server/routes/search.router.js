const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {

    axios.get(endpoint)
        .then( (response) => {
        console.log(response.data);
        res.send(response.data)
        })
        .catch( (error) => {
        res.sendStatus(500);
        });
});

module.exports = router;