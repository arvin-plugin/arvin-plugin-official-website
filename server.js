const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const produkRouter = require('./routes/produk');
const projectsRouter = require('./routes/projects');
const kontakRouter = require('./routes/kontak');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('landing.ejs');
});

app.use('/produk', produkRouter);
app.use('/projects', projectsRouter);
app.use('/kontak', kontakRouter);
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
