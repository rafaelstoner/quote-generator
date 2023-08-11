
quoteText = document.getElementById('quote');
quoteAuthor = document.getElementById('author');
newQuoteBtn = document.getElementById('new-quote');
tweeterBtn = document.getElementById('twitter');

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

function tweet() {
  const twitterUrl = 'https://twitter.com/intent/tweet';
  const quote = quoteText.innerText;
  const author = quoteAuthor.innerText;
  const tweetEndpoint = `${twitterUrl}/?text=${quote} - ${author}`;
  window.open(tweetEndpoint, '_blank');
}

// Listeners
newQuoteBtn.addEventListener('click', getQuote);
tweeterBtn.addEventListener('click', tweet);


//On load
getQuote();
