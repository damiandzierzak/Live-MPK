function performRequest() {
    console.log("perform request");
	console.log(stopId, lineNr);
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/passageInfo/stopPassages/stop?stop=130&mode=departure';

    $.getJSON(queryString, function (results) {
        console.log(results);
        $('#error-msg').text("Received!");

    }).fail(function (jqXHR) {
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });

}
