const router = require('./routers/posts');
const express = require('express');
const app = express();
const port = 3000;

app.use('/posts', router);