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
      const source = document.createElement("p");
      const title = document.createElement("h3");
      const date = document.createElement("p");
      const summary = document.createElement("p");
      const div = document.createElement("div");
  
      div.classList.add("news-metadata")
      source.innerText = newsItem.source;
      source.classList.add("news-source");
      title.innerText = newsItem.title;
      title.classList.add("news-title");
      date.innerText = newsItem.date;
      date.classList.add("news-date");
      summary.innerText = newsItem.summary;
      summary.classList.add("news-summary");

      div.appendChild(date)
      div.appendChild(source)
  
      
      article.appendChild(title);
      article.appendChild(summary);
      article.appendChild(div);
      mainElement.appendChild(article);
    });
  }

  fetchData();