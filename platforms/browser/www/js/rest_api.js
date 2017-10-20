var kontaktBtn = document.getElementById("kontakt-btn");
var portfolioPostsContainer = document.getElementById("dynamicContainer");
	kontaktBtn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://sympozjum.e-gap.pl/wp-json/wp/v2/posts?per_page=1');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
	createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();
	
	});


function createHTML(postsData){
	var htmlString = '';
	for(i = 0; i < postsData.length; i++){
		htmlString += '<h2>' + postsData[i].title.rendered + '</h2>';
		htmlString += '<p>' + postsData[i].content.rendered;
	}
	portfolioPostsContainer.innerHTML = htmlString;
}