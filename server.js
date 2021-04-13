const express = require('express');
const app = express();
const cors = require('cors')

const postRouter = require('./routes/posts');


app.use(cors({
    origin: '*',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/people', postRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8000, () => {
  console.log('Starting server');
});