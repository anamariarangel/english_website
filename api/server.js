require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const fetch = require('node-fetch');

// Inicializa o app Express
const app = express();

// Configurações básicas de segurança e CORS
app.use(helmet());
app.use(cors({
  origin: [
    'https://teacherisadora.com.br',
    'https://www.teacherisadora.com.br',
    'http://localhost:5173',
    'http://localhost:4173'
  ],
  methods: ['GET', 'POST', 'OPTIONS']
}));

// Middleware para parsing JSON
app.use(express.json({ limit: '10mb' }));

// Validação da API Key
const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!GOOGLE_API_KEY) {
  console.error('❌ GOOGLE_PLACES_API_KEY não configurada');
  process.exit(1);
}

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    environment: process.env.NODE_ENV || 'development'
  });
});

// Rota para autocomplete de lugares
app.get('/api/places', async (req, res) => {
  try {
    const { input } = req.query;
    if (!input) return res.status(400).json({ error: 'Parâmetro "input" é obrigatório' });

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&types=geocode&language=pt_BR&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    res.json(data);
  } catch (error) {
    console.error('Erro no autocomplete:', error);
    res.status(500).json({ error: 'Erro ao buscar lugares' });
  }
});

// Rota para detalhes do lugar com reviews
app.get('/api/place-details', async (req, res) => {
  try {
    const { place_id } = req.query;
    if (!place_id) return res.status(400).json({ error: 'Parâmetro "place_id" é obrigatório' });

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,user_ratings_total,reviews&language=pt-BR&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    res.json(data);
  } catch (error) {
    console.error('Erro nos detalhes do lugar:', error);
    res.status(500).json({ error: 'Erro ao buscar detalhes' });
  }
});

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Manipulador de erros
app.use((err, req, res, next) => {
  console.error('Erro interno:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Exporta o app para a Vercel
module.exports = app;