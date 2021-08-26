const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Product = require('../Models/product');
require('dotenv').config();

// MongoDB connection part
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log(`Connection Open`);
});
// End of MongoDB connection part

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//live search
app.post('/liveSearch', async (req, res) => {
  let payload = req.body.payload.trim();
  let search = await Product.find({
    inisial: payload.toUpperCase(),
  }).exec();

  search = search.slice(0, 10);

  res.send({ payload: search });
});


//menambah data dosen
//method get untuk mengambil front end dari menambah dosen
app.get('/new', (req, res) => {
  res.render('newDosen');
})



//halaman utama
app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
