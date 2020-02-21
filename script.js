console.log('npm-grunt'); 

// $(document).ready(function(){


//   $('body').click(function(){
//     $(this).css('background','cyan');
//   });
// });




var newsContainer = document.getElementById("news-info")
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	OurRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	}
	ourRequest.sent();
});

function renderHTML(data) {
	newsContainer.inserAdjacentHTML('beforeend', 'testing 123');
}