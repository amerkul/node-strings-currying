function debouncedSearch(query) {  
    console.log("Searching for:", query);  
} 

function debounce(fn, time) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), time);
    }
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);  
      
const inputElement = document.getElementById("search-input");  
inputElement.addEventListener("input", event => {  debouncedSearchHandler(event.target.value);});