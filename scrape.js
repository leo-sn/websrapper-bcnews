const puppeteer = require('puppeteer');

const url = "https://www.richmond-news.com/highlights";

//Create scrapping function

const main = async () => {
    // launch a new browser using puppeteer
    const browser = await puppeteer.launch({headless: false});
    // create new page using puppeteer
    const page = await browser.newPage();
    // go to the webpage
    await page.goto(url);
   
    // load the whole page with evaluate
    const allNews = await page.evaluate(() => {
        //create the selector from the page
        const newsSelector = document.getElementsByClassName('media');

        let news = Array.from(newsSelector).map((n) => {

            const title = n.querySelector('h2').innerText;
            const date = n.querySelector('time').title;
            const summary = n.getElementsByClassName('media-intro')[0].innerHTML;
            const source = "Richmond-News"

            return {title, summary, date, source}
        })

        return (news)
    })
    // close the browser we created after captured the screenshot
    await browser.close();
    
    return allNews;
    
}

module.exports = { main };