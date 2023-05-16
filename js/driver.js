import {Recommendations} from './fetch-data.js'
import {WidgetBuilder} from "./widget-builder.js";

const widget = document.querySelector('.widget');
let recommendationsList = [];

document.addEventListener('DOMContentLoaded', function () {
    let recommendations = new Recommendations();

    recommendations.load()
        .then(function (recommendationsList) {
            console.log(recommendationsList)
            let widgetBuilder = new WidgetBuilder(recommendationsList)
            widgetBuilder.tileBuilder();
        });


})