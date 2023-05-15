import {WidgetBuilder} from './widget-builder.js'

const widget = document.querySelector('.widget');
let recommendationsList = [];

document.addEventListener('DOMContentLoaded', function () {
  loadRecommendations()
})
function loadRecommendations() {
  console.log("in LoadImageDate")
  // Make a request to the API endpoint
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  // const url = 'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init'
  const url = "../json/cache-response.json" // local cache response due to CORS issue working against taboola api server
  fetch( url, {
    // headers: {
    //   'Origin': url,
    //   'x-requested-with': 'XMLHttpRequest'
    // }
  })
    .then(function (response) {
      // Parse the JSON response
      console.log(response.status)
      return response.json();
    })
    .then(function (data) {
      // Loop through the image data and add images to the container
      recommendationsList = data.list
      recommendationsList.forEach(recommendation =>{
        console.log(recommendation.description)
      })
    })
    .then(function(){
        let widgetBuilder = new WidgetBuilder(recommendationsList)
        widgetBuilder.tileBuilder();
    })
    .catch(error=> {
      console.log("caught an error")
      console.log(error);
    });

}

