// quotes in an array 

const quotes = [
    {
        quote: 'Education is the most powerful weapon which you can use to change the world.',
        source: 'Nelson Mandela',
        year: 1990
    },

    {
        quote: 'Be the change that you wish to see in the world.',
        source: 'Mahatma Gandhi',
        year: 1913
    },

    {
        quote: 'If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.',
        source: 'J.K. Rowling',
        tag: 'Book, Harry potter and the Goblet of fire.',
        year: 2000
    },

    {
        quote: 'Never let the fear of striking out keep you from playing the game',
        source: 'Babe Ruth',
        tag: 'Baseball player',
    },

    {
        quote: 'Life imposes things on you that you can`t control, but you still have the choice of how you`re going to live through this.',
        source: 'Celine Dion',
        tag: 'Canadian Singer',
    }
]


// getRandomQuote function

function getRandomQuote() {
    let RandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return RandomQuote; }


function printQuote(){
    let quote = getRandomQuote();
    let html = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`
    if (quote.citation !== undefined) {
    html += `<span class ="citation">${quote.citation}</span>`;
    }
    if (quote.year !== undefined) {
    html += `<span class = "year">${quote.year}</span>`;
    }
    if (quote.tag !== undefined) {
    html += `<span class = "tag">, ${quote.tag}</span>`;
    }
    `</p>`

    return (document.getElementById("quote-box").innerHTML = html);
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);







