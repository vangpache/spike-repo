// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
// const fs = require('fs');
// const readline = require('readline');
// const { google } = require('googleapis');

// // Load client secrets from a local file.
// fs.readFile('credentials.json', (err, content) => {
//     if (err) return console.log('Error loading client secret file:', err);
//     // Authorize a client with credentials, then call the Google Calendar API.
//     authorize(JSON.parse(content), listEvents);
// });

// const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// const TOKEN_PATH = 'token.json';

// router.get('/', (req, res) => {
//     console.log('in get calendar');
    

//     axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/acl/${ruleId}`)

    
//     .then((result) => {
//         console.log('calender results:', result);
//         res.send(result)
//     }).catch(error => {
//         console.log('in calendar error,', error);
//         res.sendStatus(500)
        
//     })
    
// })


// module.exports = router;