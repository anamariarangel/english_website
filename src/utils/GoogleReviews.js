const PLACE_ID = 'ChIJI_1Dn1FDlpQR51FKnrXqJtM';

export async function fetchGoogleReviews() {
  try {
    // URL corrigida para o caminho de redirecionamento mais seguro
    const response = await fetch(`/api/place-details?place_id=${PLACE_ID}`);
    
    if (!response.ok) {
        // Se a resposta não for OK, lança um erro com o status
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    console.log("Resposta bruta:", text);
    
    // A tentativa de JSON.parse está aqui, por isso o erro de sintaxe
    return JSON.parse(text); 
  } catch (error) {
    console.error('Erro ao buscar reviews:', error);
    throw error;
  }
}