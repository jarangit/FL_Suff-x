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

// ประกาศตัวแปรเพื่อเก็บข้อมูลที่จะใส่ใน meta tag ของ index.html
let data = {
    title: 'Suffix',
    description: 'Suffix is a blog for web developers and designers',
    image: 'https://www.suffix.works/images/og-image.jpg'

};

// สร้าง endpoint สำหรับเรียกข้อมูลทั้งหมด
app.get('/api/posts', (req, res) => {
    res.json(ListThink);
});

// สร้าง endpoint สำหรับเรียกข้อมูลแบบละเอียด 
app.get('/api/post/:id', (req, res) => {
    const id = req.params.id;
    const post = ListThink.find(post => post.id === id);
    res.json(post);
});


// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// here we serve the index.html page 
app.get('/*', (req, res, next) => {
    // console.log("res index js:", res);

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
            const thinkInfo = info?.think_info;
            const path = req?.originalUrl?.split("/")[2];
            for (let i = 0; i < thinkInfo.length; i++) {
                if (thinkInfo[i]?.slug === path) {
                    data = {
                        title: thinkInfo[i]?.title,
                        description: thinkInfo[i]?.title,
                        image: thinkInfo[i]?.image
                    }
                }
            }
        }
    }
    request(options, callback);
    next();

}, (req, res) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end();
        }
        htmlData = htmlData.replace(/<title>Suffix<\/title>/, `<title>${data.title}</title>`);
        htmlData = htmlData.replace(/<meta name="description" content="Suffix is a blog for web developers and designers">/, `<meta name="description" content="${data.description}">`);
        htmlData = htmlData.replace(/<meta property="og:image" content="https:\/\/www.suffix.works\/images\/og-image.jpg">/, `<meta property="og:image" content="${data.image}">`);
        htmlData = htmlData.replace(/<meta property="og:title" content="Suffix">/, `<meta property="og:title" content="${data.title}">`);
        htmlData = htmlData.replace(/<meta property="og:url" content="https:\/\/www.suffix.works">/, `<meta property="og:url" content="${req.originalUrl}">`);
        htmlData = htmlData.replace(/<meta property="og:type" content="website">/, `<meta property="og:type" content="website">`);
        htmlData = htmlData.replace(/<meta name="twitter:card" content="summary_large_image">/, `<meta name="twitter:card" content="summary_large_image">`);
        htmlData = htmlData.replace(/<meta name="twitter:site" content="@suffixworks">/, `<meta name="twitter:site" content="@suffixworks">`);
        htmlData = htmlData.replace(/<meta name="twitter:creator" content="@suffixworks">/, `<meta name="twitter:creator" content="@suffixworks">`);
        htmlData = htmlData.replace(/<meta name="twitter:title" content="Suffix">/, `<meta name="twitter:title" content="${data.title}">`);
        htmlData = htmlData.replace(/<meta name="twitter:description" content="Suffix is a blog for web developers and designers">/, `<meta name="twitter:description" content="${data.description}">`);
        htmlData = htmlData.replace(/<meta name="twitter:image" content="https:\/\/www.suffix.works\/images\/og-image.jpg">/, `<meta name="twitter:image" content="${data.image}">`);
        res.send(htmlData);
        console.log("htmlData:", htmlData);
    })

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
//         console.error('error:', error); // Print the error if one occurred
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         console.log('body:', body); // Print the HTML for the Google homepage.
//         if (!error && response.statusCode == 200) {
//             const info = JSON.parse(body);
//             console.log("info:", info);
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
