const axios = require('axios');
const express = require('express');
const router = express.Router();
const multer = require('multer');
require('dotenv').config();



const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.API_SECRET
})


// const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dquorievt/upload'

//POST AN UPLOADED IMAGED TO CLOUDINARY
router.post('/', (req, res) => {
    const file = req.files.file;
    console.log('heyyy:', file);
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
       console.log('error', err);
       console.log('Result:', result);
       res.send({
           success: true,
           result
       })
    })
})



// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' +file.originalname)
//     }
// })

// const upload = multer({ storage: storage }).single('file')




//SAVE THE FILE TO IMAGES FOLDER
// router.post('/', function(req, res) {
//     console.log('in post files:');
//     upload(req, res, function(err) {
//         if (err instanceof multer.MulterError) {
//             return res.status(500).json(err)
//         } else if (err) {
//             return res.status(500).json(err)
//         }
//         return res.status(200).send(req.file)
//     })
// })






module.exports = router;