const options = {
  method: "GET",
};
const searchForm = () => {
  let value = document.querySelector("#search").value;
  fetch(
    `https://newsapi.org/v2/everything?q=${value}&from=2022-02-28&sortBy=publishedAt&apiKey=12b64533a43946a89ecaa67b9f852f10`,
    options
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const articles = data.articles;
      articles.map((article, index) => {
        const content = document.querySelector(".content");

        const item = document.createElement("div");
        item.className = `item`;
        content.appendChild(item);
        const imgBox = document.createElement("div");
        imgBox.className = "img";
        item.appendChild(imgBox);
        const aImg = document.createElement("a");
        aImg.setAttribute("href", article.urlToImage);
        imgBox.appendChild(aImg);
        const img = document.createElement("img");
        img.setAttribute("src", article.urlToImage);
        aImg.appendChild(img);

        const textContent = document.createElement("div");
        textContent.className = "text-content";
        item.appendChild(textContent);
        const author = document.createElement("div");
        author.className = "author";
        textContent.appendChild(author);
        const textAuthor = document.createTextNode("Tác giả : ");
        author.appendChild(textAuthor);
        const authorName = document.createElement("span");
        const textAuthorName = document.createTextNode(article.author);
        authorName.appendChild(textAuthorName);
        author.appendChild(authorName);

        const title = document.createElement("div");
        title.className = "title";
        textContent.appendChild(title);
        const linkTitle = document.createElement("a");
        linkTitle.setAttribute("href",article.url);
        const textTitle = document.createTextNode(article.title);
        linkTitle.appendChild(textTitle);
        title.appendChild(linkTitle);

        const description = document.createElement("div");
        description.className = "description";
        const textDescription = document.createTextNode(article.description);
        description.appendChild(textDescription);
        textContent.appendChild(description);

        const contentText = document.createElement("div");
        contentText.className = "content-text";
        const textContentText = document.createTextNode(article.content);
        contentText.appendChild(textContentText);
        textContent.appendChild(contentText);

      });
    })
    .catch((err) => console.log(err));
};
