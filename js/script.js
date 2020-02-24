console.log('json & ajax'); //testing script.js
 $(document).ready(function(){
var myKey = JSON.parse(apiKey);
console.log(myKey[0]);
myKey = myKey[0].key;
console.log(myKey);
//reading users choice
	document.getElementById('submit').addEventListener('click', function(){
	endPoint = document.getElementById('endpoints').value;
	// country = document.getElementById('country').value;
	// size = document.getElementById('sizes').value;
  console.log(endPoint); //actual parameter
  displayData(endPoint);//actual parameter
  });
function displayData(ep){
  console.log(ep);
//ajax method


$.ajax({
  // url:`https://api.unsplash.com/${ep}/?client_id=${myKey}`,
  // url:`http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-16&sortBy=publishedAt&apiKey=${myKey}`,
  // url:`http://newsapi.org/v2/everything?q=bitcoin&from=2020-01-16&sortBy=publishedAt&apiKey=${myKey}`,
  // url:`http://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`,
  url:`http://newsapi.org/v2/top-headlines?country=${ep}&category=business&apiKey=${myKey}`,
  type:'GET',
  data:'json',

  success: function(data){
    console.log(data);

                var art = data.articles[0].publishedAt ;
                var title = data.articles[0].title ;
                var img = data.articles[0].urlToImage ;
                console.log(art);
                console.log(title);
                console.log(img);

                for(i=0; i < data.articles.length; i++) {
                  document.getElementById('result').innerHTML +=
                        '<div class="col">' +
                        '<div class="card" style="width: 18rem;">' +
                        '<img src=" ' + data.articles[i].urlToImage +' " class="card-img-top" alt="Plant Image">' +
                        '<div class="card-body">' +
                        '<h1 class="card-title"> '+ data.articles[i].title +' </h1>' +
                        '<h5 class="card-title"> '+ data.articles[i].author +' </h5>' +
                        '<a href="'+ data.articles[i].url +'" target="_blank">Read more</a>' +

                      '</div>' +
                  '</div>';
                };
//
  },//success

  error:function(){
    console.log('error');
  }//error
 });//ajax
}; // functione displayData ends here
});//document.ready
