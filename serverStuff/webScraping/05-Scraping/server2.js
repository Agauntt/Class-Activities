/* eslint-disable no-console */
var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server2.js is doing
console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the NHL website:" +
            "\n******************************************\n");

// Making a request via axios for `nhl.com`'s homepage
axios.get("https://roguerocket.com/category/us/").then(function(response) {

  // Load the body of the HTML into cheerio
  var $ = cheerio.load(response.data);

  // Empty array to save our scraped data
  var results = [];

  // With cheerio, find each h4-tag with the class "headline-link" and loop through the results
  $("li.mvp-blog-story-wrap").each(function(i, element) {

    // Save the text of the h4-tag as "title"
    var title = $(element).find(".mvp-blog-story-text").children("h2").text();

    // Find the h4 tag's parent a-tag, and save it's href value as "link"
    var link = $(element).children("a").attr("href");

    // Make an object with data we scraped for this h4 and push it to the results array
    results.push({
      title: title,
      link: link
    });
  });

  // After looping through each h4.headline-link, log the results
  console.log(results);
});
