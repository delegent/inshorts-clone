// ef801708e3e4475b990250186a3821b6
console.log("Love me like you do");
// news container
let data = document.getElementById("data");
const url =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ef801708e3e4475b990250186a3821b6";
const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.getResponseHeader("Content-type", "application/json");
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHTML = "";
    articles.forEach(function (ele) {
      let news = `
			<div class="data">
			<div class="data-image-container">
		      <img src="${ele["urlToImage"]}" alt="">
	         </div>
    <div class="data-content">
		<h4>${ele["title"]}</h4>
		<small><strong style="color: #111;">Inshort</strong> ${ele[
      "publishedAt"
    ].substring(0, 10)}</small>
		<p>${ele["description"]}</p>
		<label>read more at <a href="${ele["url"]}">Visit Site</a></label>
	</div>
	</div>
			
						`;
      newsHTML += news;
    });
    /*
		
*/

    data.innerHTML = newsHTML;
  } else {
    console.error("Some error occured!");
  }
};
xhr.send();
