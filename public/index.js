const app = function () {
const url = 'https://api.punkapi.com/v2/beers';
makeRequest(url, requestComplete);

}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}

const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  populateBeersList(beers);
}

const populateBeersList = function(beers) {
  const beerList = document.getElementById('beer-list')
  beers.forEach(function(beer) {
    const name = createName(beer)
    const image = createImage(beer)
    const elements = appendElements(beerList, name, image);
  })
}

const createName = function(beer) {
  const beerName = document.createElement('li');
  beerName.innerText = beer.name;
  return beerName;
}

const createImage= function(beer) {
  const li = document.createElement('li')
  const image = document.createElement('img')
  image.src = beer.image_url;
  li.appendChild(image);
  return li;
}

const appendElements = function(beerList, name, image) {
  beerList.appendChild(name);
  beerList.appendChild(image);
}

document.addEventListener('DOMContentLoaded', app);
