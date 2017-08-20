myApp.onPageInit('autocomplete', function (page) {
    initStopsList();
    initLinesList();
    setGoOnCLickListener();
});


function setGoOnCLickListener() {
    $$('#go_button').on('click', function () {
        console.log("Stop: " + $$('#autocomplete-dropdown-stops').val() +
            " Line: " + $$('#autocomplete-dropdown-lines').val());

        performRequest($$('#autocomplete-dropdown-stops').val(), $$('#autocomplete-dropdown-lines').val());
    });

}

function initStopsList() {
    var autocompleteStops = myApp.autocomplete({
        input: '#autocomplete-dropdown-stops',
        openIn: 'dropdown',
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);

                return;
            }
            for (var i = 0; i < stopsNamesArray.length; i++) {
                if (stopsNamesArray[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(stopsNamesArray[i]);
            }
            render(results);
        }
    });
}

function initLinesList() {
    var autocompleteLine = myApp.autocomplete({
        input: '#autocomplete-dropdown-lines',
        openIn: 'dropdown',
        source: function (autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            for (var i = 0; i < lineNrsArray.length; i++) {
                if (lineNrsArray[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(lineNrsArray[i]);
            }
            render(results);
        }
    });
}



function performRequest(stopName, lineNr) {
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/passageInfo/stopPassages/stop?stop=' + stopsNamesIdsMap[stopName] + '&mode=departure';

    $$.getJSON(queryString, function (results) {
        var resultText = "";
        var arr = [];
        var direction = [];
        for (i = 0; i < results.actual.length; i++) {
            if (results.actual[i].patternText == lineNr) {
                console.log(parseTime(results.actual[i].mixedTime));
                arr.push(parseTime(results.actual[i].mixedTime));
                direction.push(results.actual[i].direction);
            }
        }

        var myList = myApp.virtualList('.list-block.virtual-list', {
            // Array with items data
            items: [
                {
                    title: "Tu się pojawią odjazdy"
					},
				],
            // Template 7 template to render each item
            template: '<li class="item-content">' +
                '<div class="item-inner">' +
                '<div class="item-title">{{title}}</div>' +
                '</div>' +
                '</li>'
        });

        if (0 < arr.length) {
            for (i = 0; i < arr.length; i++) {
                if (0 == i) {
                    myList.replaceItem(0, {
                        title: "Kierunek: " + direction[i] + " Odjazd za: " + arr[i]
                    });
                } else {
                    myList.appendItem({
                        title: "Kierunek: " + direction[i] + " Odjazd za: " + arr[i]
                    });
                }
            }
        } else {
            myList.replaceItem(0, {
                title: "Nie znaleziono odjazdów"
            });
        }
    });

}


function getRoatsList(lineNr) {
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/routeInfo/routeStops?routeId=' + lineNr;

}


function parseTime(time) {
    if (time == "0 Min") {
        return "Mniej niż minuta";
    }
    return time;
}
