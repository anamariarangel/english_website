const PLACE_ID = 'ChIJI_1Dn1FDlpQR51FKnrXqJtM';

export async function fetchGoogleReviews() {
  try {
    const response = await fetch(`/api/place-details?place_id=${PLACE_ID}`);
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar reviews:', error);
    throw error;
  }
}