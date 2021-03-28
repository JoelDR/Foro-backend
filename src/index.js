const express = require('express');
const app= express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(require('./routes/usuarioRoutes'));
app.use(require('./routes/temaRoutes'));

app.listen(3000);
console.log('Server on port 3000');