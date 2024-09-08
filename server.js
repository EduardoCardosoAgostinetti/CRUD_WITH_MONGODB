const express = require('express');
const connectDB = require('./mongodb');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB
connectDB();

// Middleware para interpretar JSON
app.use(express.json());

// Importar as rotas
const crud = require('./crud');
app.use('/crud', crud);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
