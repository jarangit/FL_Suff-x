const express = require('express');
const path = require('path');
const fs = require("fs");
const { ListThink } = require('./stub/posts');
const app = express();
const axios = require('axios');
const useEffect = "react";
const useState = "react";
const useParams = 'react-router-dom';
const request = require('request');


// const unirest = require("unirest");
const PORT = process.env.PORT || 3000;

const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');


const [data, setData] = [];
// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// here we serve the index.html page 
app.get('/*', (req, res, next) => {
    console.log("res index js:", res);
    const options = {
        url: 'https://www.suffix.works/api-v2/think/en',
        'auth': {
            'user': 'suffix',
            'pass': 'suffix2021*',
            'sendImmediately': false
        }
    };
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
        }
    }
    request(options, callback);
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // inject meta tags
        htmlData = htmlData.replace(
            `<title>${data?.title}</title>`
        )
            .replace('__META_OG_TITLE__', data?.title)
            .replace('__META_OG_DESCRIPTION__', data?.description)
            .replace('__META_DESCRIPTION__', data?.description)
            .replace('__META_OG_IMAGE__', data?.image)
        return res.send(htmlData);
    });
});


// app.get("/api", (req, res, next) => {
//     const options = {
//         url: 'https://www.suffix.works/api-v2/think/en',
//         'auth': {
//             'user': 'suffix',
//             'pass': 'suffix2021*',
//             'sendImmediately': false
//         }
//     };

//     function callback(error, response, body) {
//         // console.error('error:', error); // Print the error if one occurred
//         // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         // console.log('body:', body); // Print the HTML for the Google homepage.
//         if (!error && response.statusCode == 200) {
//             const info = JSON.parse(body);
//             console.log(info.stargazers_count + " Stars");
//             console.log(info.forks_count + " Forks");
//         }

//     }
//     request(options, callback);

// });


// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});
