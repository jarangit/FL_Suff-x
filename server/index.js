const express = require('express');
const path = require('path');
const fs = require("fs"); 
const { ListThink } = require('./stub/posts');
const app = express();
// const unirest = require("unirest");
const PORT = process.env.PORT || 3000;
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');
const url = "https://www.suffix.works/api-v2/think/en";

const config = {
    headers: {
        Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
    }
};

const [data, setData] = [];
// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));
// app.get('/*', (req, res) => {
//     const request = unirest("GET", "https://www.suffix.works/api-v2/think/en");
//     request.query({ "entry": req.params.word });
//     request.headers({
//         Authorization: 'Basic c3VmZml4OnN1ZmZpeDIwMjEq',
//     });
//     request.end(function (response) {
//       if (response.error) throw new Error(response.error);
//       res.json(response.body.associations_scored || {});
//     });
//   });

// here we serve the index.html page
app.get('/*', (config,req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // get post info
        // const postId = req.query.think_info.id;
        const post = setData(res.data.think_info.id);
        if(!post) return res.status(404).send("Post not found");

        // inject meta tags
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>${post.title}</title>`
        )
        .replace('__META_OG_TITLE__', post.title)
        .replace('__META_OG_DESCRIPTION__', post.description)
        .replace('__META_DESCRIPTION__', post.description)
        .replace('__META_OG_IMAGE__', post.image)
        return res.send(htmlData);
    });
});
// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});
