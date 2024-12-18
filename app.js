const posts = require('./data/blog');
const router = require('./routers/posts');
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`)
});

app.use(express.static('immagini_e_posts'));
app.use('/posts', router);



