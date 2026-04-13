// server.js - API REST Simples (Monolito)
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());                    // Permite requisições de qualquer origem
app.use(express.json());            // Para ler JSON no body (boa prática)

// Rota de boas-vindas (GET /)
app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: "Bem-vindo à API REST! 👋",
    status: "online",
    versao: "1.0.0",
    documentacao: "Acesse / para ver esta mensagem"
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📌 Teste a API abrindo no navegador: http://localhost:${PORT}`);
});