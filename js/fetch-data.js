export class Recommendations {
    load() {
        return new Promise((resolve, reject) => { // since fetch is an async function, I use Promise
                                                                // to handle the async code, which is the most common in js.
            let recommendationsList = [];
            // Make a request to the API endpoint
            const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

            // const url = 'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init'
            const url = "../json/cache-response.json" // local cache response due to CORS issue working against taboola api server
            fetch(url, {
                // headers: {
                //   'Origin': url,
                //   'x-requested-with': 'XMLHttpRequest'
                // }
            })
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("HTTP error " + response.status);
                    }
                    // Parse the JSON response
                    console.log(response.status)
                    return response.json();
                })
                .then(function (data) {
                    recommendationsList=  data.list;
                    resolve(recommendationsList);
                })

                .catch(error => {
                    console.log("caught an error")
                    console.log(error);
                    reject(error);
                });
        });
    }


}

