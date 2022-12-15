var searchParameter = "elections";
var numberOfRecords = 1;
var beginDate;
var endDate;

var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=vSWdiUeg8PPYtjMnjp4rcMkOuBu5Rfny&q=' + searchParameter;

// if (numberOfRecords) {
//   queryURL += '&page=' + numberOfRecords
// }
if (beginDate) {
  queryURL += '&begin_date=' + beginDate
}
if (endDate) {
  queryURL += '&end_date=' + endDate
}

console.log(queryURL);
$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function (response) {
    var results = response.response.docs;
    console.log(results);
    for(i = 0; i < numberOfRecords;i++){
      var snippet = results[i].snippet;
      var webUrl = results[i].web_url;
      var pubDate = results[i].pub_date;
      var headline = results[i].headline.main;
      var source = results[i].source;
      var thumbnail = results[i].multimedia[19].url;
    }
  });
https://www.nytimes.com/ + images/2022/11/09/us/09-pol-trump-1/09-pol-trump-1-thumbStandard.jpg
  