// quotes in an array 

const quotes = [
    {
        quote: 'Education is the most powerful weapon which you can use to change the world.',
        source: 'Nelson Mandela',
        year: 1990,
        img: '/assets/img/nelson.jpg'
    },

    {
        quote: 'Be the change that you wish to see in the world.',
        source: 'Mahatma Gandhi',
        year: 1913,
        img: '/assets/img/gandhi.jpg'
    },

    {
        quote: 'If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.',
        source: 'J.K. Rowling',
        tag: 'Book, Harry potter and the Goblet of fire.',
        year: 2000,
        img: '/assets/img/JK-Rowling.jpg'
    },

    {
        quote: 'Never let the fear of striking out keep you from playing the game',
        source: 'Babe Ruth',
        tag: 'Baseball player',
        year: '1920-1930',
        img: '/assets/img/babe.jpg'
    },

    {
        quote: 'Life imposes things on you that you can`t control, but you still have the choice of how you`re going to live through this.',
        source: 'Celine Dion',
        tag: 'Canadian Singer',
        img: '/assets/img/celine-dion.webp'
    }
]


// Array of colors for text and background
const colors = ['red', 'violet', 'hotpink', 'brown', 'purple', 'green', 'orange', 'gray', 'babyblue'];

// getRandomQuote function
function getRandomQuote() {
    // Generates a random index and retrieves a random quote from the quotes array
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// gets random color from the colors array
function getRandomColor() {
    // Generates a random index and retrieves a random color from the colors array
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to print a random quote and set the text color and background color
function printQuote() {
    // Get a random quote
    let quote = getRandomQuote();
    // Get a random color
    let color = getRandomColor();

    // Build the HTML for the quote and its details
    let html = `<p class="quote" style="color: ${color};">${quote.quote}</p>
    <p class="source" style="color: ${color};">${quote.source}`;

    // Check if the quote has additional details
    if (quote.citation !== undefined) {
        html += `<span class="citation" > ${quote.citation}</span>`;
    }
    if (quote.year !== undefined) {
        html += `<span class="year" > ${quote.year}</span>`;
    }
    if (quote.tag !== undefined) {
        html += `<span class="tag" >, ${quote.tag}</span>`;
    }
    html += `</p>`;
    if (quote.img !== undefined) {
        html += `<img id="img" src="${quote.img}" alt="Image of ${quote.source}" >`;
    }

    // Update the HTML of the quote-box element
    document.getElementById("quote-box").innerHTML = html;

    // Set the background color of the body to match the text color
    document.body.style.backgroundColor = color;
}

// Attach the printQuote function to the "New Quote" button's click event
document.getElementById('load-quote').addEventListener("click", function () {
    printQuote();
    getRandomColor();
}, false);