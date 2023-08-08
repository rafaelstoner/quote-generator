
const API_BASE_URL = 'http://api.forismatic.com/api/1.0/';
const API_METHOD = 'getQuote';
const API_LANG = 'en';
const API_FORMAT = 'json';

async function getQuote() {

    const apiURL = `${API_BASE_URL}?method=${API_METHOD}&lang=${API_LANG}&format=${API_FORMAT}`;

    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        handleQuoteData(data);
    } catch (error) {
        handleQuoteError(error);
    }
}

function handleQuoteData(data) {
    console.log(data);
    // Faça algo com os dados da resposta da API
}

function handleQuoteError(error) {
    console.error('Erro ao obter a quote:', error);
    console.log(error);
}

getQuote();






