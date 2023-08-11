
quoteText = document.getElementById('quote');
quoteAuthor = document.getElementById('author');
newQuoteBtn = document.getElementById('new-quote');

const API_URL = "https://api.quotable.io/random";


async function getQuote() {
  try {
    const response = await fetch(API_URL);
    
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
  //If author is empty, then repace it with unknown

  if (data.author === "") {
    quoteAuthor.innerText = "unknown";
  } 
  quoteAuthor.innerText = data.author;

  if (data.content.length > 150) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');

  }
  quoteText.innerText = data.content;
}

function handleQuoteError(error) {
  console.error('Erro ao obter a quote:', error);
}

// Add Listeners
newQuoteBtn.addEventListener('click', getQuote);

//On load
getQuote();
