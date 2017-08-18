myApp.onPageInit('autocomplete', function (page) {
    initStopsList();
    initLinesList();
    setGoOnCLickListener();
});


function setGoOnCLickListener() {
    $$('#go_button').on('click', function () {
        alert("Stop: " + $$('#autocomplete-dropdown-stops').val() +
			  " Line: " + $$('#autocomplete-dropdown-lines').val());
			  
		performRequest($$('#autocomplete-dropdown-stops').val(), $$('#autocomplete-dropdown-lines').val());
		alert("Done")
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

    var $$ = Dom7;
    $$.getJSON(queryString, function (results) {
		alert("Start json:" + queryString);
        var resultText = "";
        var arr = [];
        var direction = [];
        for (i = 0; i < results.actual.length; i++) {
            if (results.actual[i].routeId == lineNr) {
                console.log(parseTime(results.actual[i].mixedTime));
                arr.push(parseTime(results.actual[i].mixedTime));
                direction.push(results.actual[i].direction);
            }
        }
		alert("After for json");
        var ObjUl = $('ul.results-ul');
        ObjUl.addClass("list-group");
        for (i = 0; i < arr.length; i++) {
            var Objli = $('<li></li>');
            Objli.addClass("list-group-item");
            Objli.text("Kierunek: " + direction[i] + " Odjazd za: " + arr[i]);

            ObjUl.append(Objli);
        }
		
		alert("Done json");
    }).fail(function (jqXHR) {
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
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
