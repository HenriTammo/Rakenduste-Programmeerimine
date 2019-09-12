/*jshint esversion:6*/
const x = window.location;
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const cost = urlParams.get("cost");
const src = urlParams.get("src");
//alert('title: ${title} cost: ${cost} path: ${src}');

const container = document.createElement("div");
container.className = "itemContainer";

const image = document.createElement("img");
image.src = src;
image.className = "item_image";

const titleElement = document.createElement("h2");
titleElement.textContent = title;
titleElement.className = "item_title";

const description = "Prime version of the warframe";
const textElement = document.createElement("p");
textElement.textContent = description;
textElement.className = "item_description";

const costElement = document.createElement("div");
costElement.textContent = cost;
costElement.className = "item_cost";

container.append(titleElement);
container.append(image);
container.append(textElement);
container.append(costElement);


window.addEventListener("load", () => {
  const app = document.getElementById("item-body");
  app.append(container);
});
