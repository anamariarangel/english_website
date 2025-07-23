// netlify/functions/places.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': 'https://68814c929b1cd200081f40f2--englishwe.netlify.app',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Apenas aceitar GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Método não permitido' }),
    };
  }

  try {
    // Extrair input dos query parameters
    const { input } = event.queryStringParameters || {};
    
    if (!input) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Parâmetro "input" é obrigatório' }),
      };
    }

    // Verificar se a API key existe
    const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    if (!GOOGLE_API_KEY) {
      console.error('GOOGLE_PLACES_API_KEY não configurada');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Configuração do servidor inválida' }),
      };
    }

    // Fazer a requisição para a Google Places API
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&types=geocode&language=pt_BR&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error('Erro no autocomplete:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Erro ao buscar lugares' }),
    };
  }
};