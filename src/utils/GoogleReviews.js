const PLACE_ID = 'ChIJI_1Dn1FDlpQR51FKnrXqJtM';

export async function fetchGoogleReviews() {
  try {
    // Chama a função Netlify diretamente, ignorando o redirecionamento
    const response = await fetch(`/.netlify/functions/place-details?place_id=${PLACE_ID}`);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const text = await response.text();
    console.log("Resposta bruta:", text);
    
    return JSON.parse(text);
  } catch (error) {
    console.error('Erro ao buscar reviews:', error);
    throw error;
  }
}

// Função para buscar lugares (se necessário)
export async function fetchPlaces(input) {
  try {
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:8888' 
      : 'https://teacherisadora.com.br';
    
    const response = await fetch(`${baseUrl}/.netlify/functions/places?input=${encodeURIComponent(input)}`);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar lugares:', error);
    throw error;
  }
}