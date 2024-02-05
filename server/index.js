const express = require('express');
const path = require('path');
const fs = require("fs"); 
const { getPostById } = require('./stub/posts');
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');

app.use(require('prerender-node').set('prerenderToken', 'XKBypmckUW9fcFL2qMoh'));
