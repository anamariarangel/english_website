// netlify/functions/place-details.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*', // Permite todas as origens ou especifique o seu domínio
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
  };

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Método não permitido' }),
    };
  }

  try {
    const { place_id } = event.queryStringParameters || {};
    
    if (!place_id) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Parâmetro "place_id" é obrigatório' }),
      };
    }

    const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    if (!GOOGLE_API_KEY) {
      console.error('GOOGLE_PLACES_API_KEY não configurada');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Configuração do servidor inválida' }),
      };
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,user_ratings_total,reviews&language=pt-BR&key=${GOOGLE_API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error('Erro na função place-details:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Erro interno do servidor' }),
    };
  }
};