const express = require('express');
const app = express();


const museusRoutes = require('./routes/museus');
const obrasRoutes = require('./routes/obras');

// Use as rotas
app.use('/api', museusRoutes);
app.use('/api', obrasRoutes);


const port = process.env.PORT || 3307;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});




