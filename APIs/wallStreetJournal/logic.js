var queryTopic = "trump";
var queryRecords = 3;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryTopic + "&api-key=RIS4mG8f4GDiFVSfsuUBPARlmQhIcqef&limit=" + queryRecords;

function temp(){
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(data) {
    console.log(data);
    console.log(queryURL);

    var results = data.response.docs.headline.main;

    var title = results;

    for (i = 0; i < results.length; i++) {

        article = $("<h3>").text(title[i]);

        $("articleSpace").append(article);
    }
})
};

temp();