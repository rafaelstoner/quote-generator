const API_URL = "https://type.fit/api/quotes";

async function getQuote() {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];
    
    handleQuoteData(randomQuote);
  } catch (error) {
    handleQuoteError(error);
  }
}

function handleQuoteData({ text, author }) {
  // Cases where author is 'type.fit', replace with 'unkown'
  if (author === "type.fit" ) {
    author = "unknown";
  } else {
    // If author name ends with 'type.fit', remove it
    author = author.replace(", type.fit", "");
  }

  console.log(`Quote: ${text}`);
  console.log(`Author: ${author}`);
}

function handleQuoteError(error) {
  console.error('Erro ao obter a quote:', error);
}

getQuote();
