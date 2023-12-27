// Assuming you have an HTML structure with a div like this:
// <div class="container" id="quoteContainer"></div>

let quoteContainer = document.getElementById('quoteContainer');
let authorContainer = document.querySelector('.author')
const button = document.querySelector(".box")
function fetchq(){
fetch('https://dummyjson.com/quotes/random')
  .then(res => res.json())
  .then(data => {
    let quote = data.quote;
    let author = data.author;
    quoteContainer.textContent = quote;
    authorContainer.textContent = "by "+ author

    console.log(quote)
    console.log(author)
  })
  .catch(error => console.error('Error fetching data:', error));
}

button.addEventListener('click', fetchq)
