const { main } = require('./scraper.js');

function addingElement() {
    
    const h2 = document.createElement("h2");
    const mainElement = document.getElementById("main");
    h2.innerText = "Hello H1"
    
    mainElement.appendChild(h2);

}

addingElement();