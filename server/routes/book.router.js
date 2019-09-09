const express = require('express');
const router = express.Router();
const axios = require('axios');

const convert = require('xml-js');


require('dotenv').config();


router.get('/:search', (req, res) => {
    console.log('in bookRouter js GET:', req.params.search);

    axios.get(`https://www.goodreads.com/search.xml?key=${process.env.API_KEY}&q=${req.params.search}`)
        .then((result) => {
            console.log('in GET goodreads:', result);
            let xml = result.data;
            result = convert.xml2json(xml, { compact: true, spaces: 4 });
            console.log('in GET goodreads result after xml:', result);
            
            res.send(result);
        }).catch((error) => {
            console.log('in GET goodreads ERROR:', error);
        })
})




module.exports = router;