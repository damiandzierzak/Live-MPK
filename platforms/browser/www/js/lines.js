function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    console.log("init");

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        $(document).ready(function(){ 
           onDeviceReady();
        });
        
    }
}

function onDeviceReady() {
    console.log("onDeviceReady");
    initListeners();
    autocompleteStops();
    $('body').bootstrapMaterialDesign();
}

function initListeners() {

}


function performRequest(stopName, lineNr) {
    console.log("perform request");
    $('#error-msg').text('#stopId', '#lineNr');
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/passageInfo/stopPassages/stop?stop=' + routesMap[stopName] + '&mode=departure';

    $.getJSON(queryString, function(results) {
        var resultText = "";
        for (i = 0; i < results.actual.length; i++) {
            if (results.actual[i].routeId == linesMap[lineNr]) {
                resultText += parseTime(results.actual[i].mixedTime);
                resultText += "\n";
            }
        }
        $('#error-msg').text(resultText);

    }).fail(function(jqXHR) {
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });

}


function getRoatsList(lineNr) {
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/routeInfo/routeStops?routeId=' + linesMap[lineNr];

}


function autocompleteStops() {
    $('#query').typeahead({
        local: ['alpha', 'allpha2', 'alpha3', 'bravo', 'charlie', 'delta', 'epsilon', 'gamma', 'zulu']
    });
}

var linesMap = [];
linesMap["4"] = "6350571212602605601";
linesMap["52"] = "6350571212602605638";

var routesMap = [];
routesMap["AWF"] = "113";
routesMap["Batorego"] = "78";

function parseTime(time) {
    if (time == "0 Min") {
        return "Mniej niż minuta";
    }
    return time;
}