async function fetchData() {
    try {
      // Make a GET request to the server's /scrape route
      const response = await fetch('http://localhost:3000/scrape');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Parse the JSON response
        const data = await response.json();
        console.log(data)
        
      
      // Do something with the scraped data here (e.g., update the DOM with the news)
        displayDataOnPage(data);
      
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
}

function displayDataOnPage(data) {
    const mainElement = document.getElementById("main");
  
    // Create and append HTML elements to display the scraped data
    data.forEach((newsItem) => {
      const article = document.createElement("article");
      const title = document.createElement("h2");
      const date = document.createElement("p");
      const summary = document.createElement("p");
  
      title.innerText = newsItem.title;
      date.innerText = newsItem.date;
      summary.innerText = newsItem.summary;
  
      article.appendChild(title);
      article.appendChild(date);
      article.appendChild(summary);
  
      mainElement.appendChild(article);
    });
  }

  fetchData();