var myApp = new Framework7({
    modalTitle: "Framework7",
    material: true
});
var $$ = Dom7;
var mainView = myApp.addView(".view-main", {});
var rightView = myApp.addView(".view-right", {
    name: "right"
});
var myList;

// ---------- main page ---------
function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    console.log("init");

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }
}

function onDeviceReady() {
    console.log("onDeviceReady");
    //setAddFavouriteButtonListener();
    checkFavourites();
}


function checkFavourites() {
    console.log("key-stop:" + (window.localStorage.getItem("key-stop") === undefined));
    var stopsList = JSON.parse(window.localStorage.getItem("key-stops-list"));

    if (stopsList === null || stopsList === undefined || stopsList.length === 0) {
        displayNoFavourites();
    } else {
        displayFavouritesList();
    }
}


function displayNoFavourites() {
    $$("#no-favourite-container").show();
}

function displayFavouritesList() {
    var stopsList = JSON.parse(window.localStorage.getItem("key-stops-list"));
    var lineList = JSON.parse(window.localStorage.getItem("key-line-list"));

    console.log("displaying data: " + stopsList.length);

    var items = [];

    for (var i = 0; i < stopsList.length; i++) {
        items.push({
            title: "Linia: " + lineList[i] + " Przystanek: " + stopsList[i],
            stopId: stopsList[i],
            lineNumber: lineList[i]
        });
    }


    myList = myApp.virtualList("#favourite-list", {
        items: items,
        renderItem: function (index, item) {
            return "<li class=\"item-content\">" +
                "<div class=\"item-inner\">" +
                //"<a id=\"open-favourite\" href=\"favourite_details.html\" class=\"item-link\"  onclick=\"onFavouriteItemClicked(" + index + "," + item.stopId + "," + item.lineNumber + ")\">" +
                "<a href=\"favourite_details.html\" id=\"open-favourite\" onclick=\"clicked(" + index + ")\">" +
                "<div class=\"item-title\" >" + item.title + "</div>" +
                "</a>" +
                "<div class=\"remove\" onclick=\"removeFavouriteItem(" + index + ")\">X</div>" +
                "</div>" +
                "</li>";
        }
    });

    $$("#no-favourite-container").hide();
    $$("#favourite-list").show()
}

function clicked(id){
    console.log("item clicked id:" + id);
    console.log("item clicked id:" + myList.items[0].title);
}

function onFavouriteItemClicked(id, stopName, lineNumber) {
    console.log("item clicked id:" + id);
    if (id !== "-1") {
        console.log("item clicked id:" + id + "stop: " + stopName);
        window.sessionStorage.setItem("details-stopName", stopName);
        window.sessionStorage.setItem("details-lineNumber", lineNumber);
        // window.open("favourite_details.html");
    }
}

function removeFavouriteItem(id) {
    console.log("removing item: " + id);
    myList.deleteItem(id);
    var stopsList = JSON.parse(window.localStorage.getItem("key-stops-list"));
    var lineList = JSON.parse(window.localStorage.getItem("key-line-list"));

    stopsList.splice(id, 1);
    lineList.splice(id, 1);

    if (stopsList.length === 0) {
        window.localStorage.removeItem("key-stops-list");
        window.localStorage.removeItem("key-line-lis");
        displayNoFavourites();
    } else {
        window.localStorage.setItem("key-stops-list", JSON.stringify(stopsList));
        window.localStorage.setItem("key-line-list", JSON.stringify(lineList));
    }


}


/*function setAddFavouriteButtonListener() {
    $$("#add-button").on("click", function () {
        setSaveButtonClickListener();
        fillSavedData();
    });
}*/

function saveFavouriteData(stop, line) {
    var stopsList = JSON.parse(window.localStorage.getItem("key-stops-list"));
    var lineList = JSON.parse(window.localStorage.getItem("key-line-list"));

    if (stopsList === null && lineList === null) {
        stopsList = [stop];
        lineList = [line];
    } else {
        stopsList = [];
        lineList = [];
        stopsList.push(stop);
        lineList.push(line);
    }

    console.log("setting data" + stopsList.length);


    window.localStorage.setItem("key-stops-list", JSON.stringify(stopsList));
    window.localStorage.setItem("key-line-list", JSON.stringify(lineList));
}


// --------favourites--------

myApp.onPageInit("add-favourite-page", function (page) {
    initFavouriteStopsList();
    initFavouriteLinesList();
    setAddOnCLickListener();
});


function setAddOnCLickListener() {
    $$("#add_favourite_button").on("click", function () {
        if (validateFavouriteInputs()) {
            console.log("Favorite: Stop: " + $$("#favourite-autocomplete-stops").val() +
                " Line: " + $$("#favourite-autocomplete-lines").val());

            saveFavouriteData($$("#favourite-autocomplete-stops").val(), $$("#favourite-autocomplete-lines").val());
            checkFavourites();
            mainView.router.back();
        }
    });

}

function validateFavouriteInputs() {
    if (!$$("#favourite-autocomplete-stops").val() || !$$("#favourite-autocomplete-lines").val()) {
        myApp.alert(" Wypelnij wszystkie pola! ");
        return false;
    }
    return true;
}

function initFavouriteStopsList() {

    var autocompleteStops = myApp.autocomplete({
        input: "#favourite-autocomplete-stops",
        openIn: "dropdown",
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


function initFavouriteLinesList() {
    var autocompleteLine = myApp.autocomplete({
        input: "#favourite-autocomplete-lines",
        openIn: "dropdown",
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


// ----------- lines & stopes ---------

myApp.onPageInit("lines-and-stops-page", function (page) {
    initStopsList();
    initLinesList();
    setGoOnCLickListener();
});


function setGoOnCLickListener() {
    $$("#lines-and-stops-search-button").on("click", function () {
        console.log("Stop: " + $$("#lines-and-stops-autocomplete-stops").val() +
            " Line: " + $$("#lines-and-stops-autocomplete-lines").val());

        performLinesAndStopsRequest($$("#lines-and-stops-autocomplete-stops").val(), $$("#lines-and-stops-autocomplete-lines").val());
    });

}

function initStopsList() {
    var autocompleteStops = myApp.autocomplete({
        input: "#lines-and-stops-autocomplete-stops",
        openIn: "dropdown",
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
        input: "#lines-and-stops-autocomplete-lines",
        openIn: "dropdown",
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


function performLinesAndStopsRequest(stopName, lineNr) {
    var queryString =
        "http://www.ttss.krakow.pl/internetservice/services/passageInfo/stopPassages/stop?stop=" + stopsNamesIdsMap[stopName] + "&mode=departure";

    $$.getJSON(queryString, function (results) {
        var items = [];

        if (results.actual.length > 0) {
            for (var i = 0; i < results.actual.length; i++) {
                if (results.actual[i].patternText === lineNr) {
                    items.push({
                        title: "Linia: " + results.actual[i].direction + " Przystanek: " + results.actual[i].mixedTime
                    });
                }
            }
        } else {
            items.push({
                title: "Nie znaleziono odjazdów"
            });
        }
        var myList = myApp.virtualList(".list-block.virtual-list.lines-and-stops", {
            // Array with items data
            items: items,
            renderItem: function (index, item) {
                return "<li class=\"item-content\">" +
                    "<div class=\"item-inner\">" +
                    "<div class=\"item-title\">" + item.title + "</div>" +
                    "</div>" +
                    "</li>";
            }
        });
    });

}


function getRoatsList(lineNr) {
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/routeInfo/routeStops?routeId=' + lineNr;

}


function parseTime(time) {
    if (time === "0 Min") {
        return "Mniej niż minuta";
    }
    return time;
}


// ------ favourite details ---------

myApp.onPageInit("favourite_details", function (page) {
    console.log(page.name + " initialized");
    performFavouriteDetailsRequest();
    //In console we will see 'about page initialized' for About page and 'services page initialized' for Services page
});


function performFavouriteDetailsRequest() {
    //var stopName = window.sessionStorage.getItem("details-stopName");
    var stopName = "Batorego";

    // var lineNr = window.sessionStorage.getItem("details-lineNumber");
    var lineNr = "4";

    console.log("performFavouriteDetailsRequest stopname: " + stopName + ", line number:" + lineNr);

    var queryString =
        "http://www.ttss.krakow.pl/internetservice/services/passageInfo/stopPassages/stop?stop=" + stopsNamesIdsMap[stopName] + "&mode=departure";

    $$.getJSON(queryString, function (results) {
        var items = [];

        if (results.actual.length > 0) {
            for (var i = 0; i < results.actual.length; i++) {
                if (results.actual[i].patternText === lineNr) {
                    items.push({
                        title: "Linia: " + results.actual[i].direction + " Przystanek: " + results.actual[i].mixedTime
                    });
                }
            }
        } else {
            items.push({
                title: "Nie znaleziono odjazdów"
            });
        }
        var myList = myApp.virtualList("#favourite_details_list", {
            // Array with items data
            items: items,
            renderItem: function (index, item) {
                return "<li class=\"item-content\">" +
                    "<div class=\"item-inner\">" +
                    "<div class=\"item-title\">" + item.title + "</div>" +
                    "</div>" +
                    "</li>";
            }
        });
    });

}


//----------

var stopsNamesArray = [
    "AWF",
    "Agencja Kraków Wschód",
    "Balicka Wiadukt",
    "Bardosa",
    "Basztowa LOT",
    "Batorego",
    "Białucha",
    "Bieńczycka",
    "Bieżanowska",
    "Biprostal",
    "Blokowa",
    "Boisko Kabel",
    "Borek Fałęcki",
    "Borek Fałęcki I",
    "Borsucza",
    "Brama nr 4",
    "Brama nr 5",
    "Bratysławska",
    "Bronowice",
    "Bronowice Małe",
    "Bronowice Wiadukt",
    "Brożka",
    "Centralna",
    "Centrum Kongresowe ICE",
    "Chmieleniec",
    "Cichy Kącik",
    "Cienista",
    "Cmentarz Grębałów Zachód",
    "Cmentarz Podgórski",
    "Cmentarz Rakowicki",
    "Cracovia",
    "Cystersów",
    "Czerwone Maki P+R",
    "Czyżyny",
    "DH Wanda",
    "Dajwór",
    "Darwina",
    "Dauna",
    "Dunikowskiego",
    "Dworcowa",
    "Dworzec Główny",
    "Dworzec Główny Tunel",
    "Dworzec Główny Tunel",
    "Dworzec Główny Zachód",
    "Dworzec Płaszów Estakada",
    "Dworzec Towarowy",
    "Dworzec Towarowy",
    "Dąbie",
    "Elektromontaż",
    "Fabryczna",
    "Filharmonia",
    "Fort Mogiła",
    "Francesco Nullo",
    "Gromadzka",
    "Grota Roweckiego",
    "Grota-Roweckiego",
    "Głowackiego",
    "Hala Targowa",
    "Hala Targowa",
    "Jarzębiny",
    "Jeżynowa",
    "Jubilat",
    "Kabel",
    "Kampus UJ",
    "Kapelanka",
    "Klasztorna",
    "Kleeberga",
    "Klimeckiego",
    "Kobierzyńska",
    "Kocmyrzowska",
    "Koksochemia",
    "Kombinat",
    "Komorowskiego",
    "Kopiec Wandy",
    "Kordylewskiego",
    "Korona",
    "Kraków Arena Al. Pokoju",
    "Kraków Plaza",
    "Krowodrza Górka",
    "Krowodrza Górka",
    "Kuklińskiego",
    "Kurdwanów",
    "Kurdwanów pętla",
    "Lema",
    "Limanowskiego",
    "Lipińskiego",
    "Lipska",
    "Lubicz",
    "M1 Al. Pokoju",
    "Mały Płaszów",
    "Meksyk",
    "Miodowa",
    "Miodowa",
    "Mistrzejowice",
    "Miśnieńska",
    "Most Grunwaldzki",
    "Mrozowa",
    "Muzeum Inżynierii Miejskiej",
    "Muzeum Lotnictwa",
    "Norymberska",
    "Nowohucka",
    "Nowosądecka",
    "Nowy Bieżanów",
    "Nowy Kleparz",
    "Nowy Prokocim",
    "Ofiar Dąbia",
    "Oleandry",
    "Orzeszkowej",
    "Os.Kolorowe",
    "Os.Na Skarpie",
    "Os.Piastów",
    "Os.Zgody",
    "Os.Złotego Wieku",
    "PH",
    "PT",
    "Park Jordana",
    "Piaski Nowe",
    "Piasta Kołodzieja",
    "Plac Bohaterów Getta",
    "Plac Bohaterów Getta",
    "Plac Centralny",
    "Plac Centralny im. R.Reagana",
    "Plac Inwalidów",
    "Plac Wolnica",
    "Plac Wszystkich Świętych",
    "Plaza",
    "Pleszów",
    "Poczta Główna",
    "Politechnika",
    "Politechnika",
    "Powstańców Wielkopolskich",
    "Prokocim",
    "Prokocim",
    "Prokocim Szpital",
    "Prądnicka",
    "Prądnicka",
    "Pędzichów",
    "Rakowicka",
    "Reymana",
    "Rondo 308. Dywizjonu",
    "Rondo Czyżyńskie",
    "Rondo Grzegórzeckie",
    "Rondo Grzegórzeckie",
    "Rondo Hipokratesa",
    "Rondo Kocmyrzowskie",
    "Rondo Kocmyrzowskie im. Ks. Gorzelanego",
    "Rondo Matecznego",
    "Rondo Mogilskie",
    "Rondo Mogilskie",
    "Rondo Piastowskie",
    "Rostworowskiego",
    "Ruczaj",
    "Ruczaj I",
    "Rzebika",
    "Rzemieślnicza",
    "Salwator",
    "Sanktuarium Bożego Miłosierdzia",
    "Smolki",
    "Solvay",
    "Starowiślna",
    "Starowiślna",
    "Stary Kleparz",
    "Stella-Sawickiego",
    "Stradom",
    "Struga",
    "Suche Stawy",
    "Szpital Narutowicza",
    "Szwedzka",
    "Słomiana",
    "TAURON Arena Kraków Al. Pokoju",
    "TAURON Arena Kraków Wieczysta",
    "Teatr Bagatela",
    "Teatr Ludowy",
    "Teatr Variété",
    "Teligi",
    "Uniwersytet Ekonomiczny",
    "Uniwersytet Jagielloński",
    "Uniwersytet Pedagogiczny",
    "Urzędnicza",
    "Walcownia",
    "Wawel",
    "Wańkowicza",
    "Wesele",
    "Wiadukty",
    "TAURON Arena Kraków Wieczysta",
    "Witosa",
    "Wlotowa",
    "Wzgórza Krzesławickie",
    "Zabłocie",
    "Zajezdnia Nowa Huta",
    "Ćwiklińskiej",
    "Łagiewniki",
    "Łagiewniki",
    "Łagiewniki ZUS",
    "Św. Gertrudy",
    "Św. Wawrzyńca",
    "Św. Wawrzyńca",
    "Św.Gertrudy",
    "Św.Wawrzyńca"
];

var lineNrsArray = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
    "13", "14", "16", "18", "19", "20", "21", "22", "23", "24", "50", "52",
    "62", "64", "69",
    "100", "101", "102", "103", "104", "105", "106", "107", "109", "110", "111", "112",
    "113", "115", "116", "117", "120", "122", "123", "124", "125", "127", "128", "129",
    "130", "131", "132", "133", "134", "135", "137", "138", "139", "140", "141", "142",
    "143", "144", "145", "151", "152", "153", "154", "158", "159", "160", "161", "162",
    "163", "164", "166", "168", "169", "171", "172", "173", "174", "175", "178", "179",
    "181", "182", "183", "184", "192", "193", "194",
    "201", "202", "203", "204", "207", "208", "209", "210", "211", "212", "213", "214",
    "215", "217", "218", "220", "221", "222", "223", "224", "225", "226", "227", "229",
    "230", "232", "233", "235", "237", "238", "239", "240", "242", "243", "244", "245",
    "247", "248", "249", "250", "252", "253", "255", "257", "258", "259", "260", "263",
    "265", "267", "268", "269", "270", "271", "273", "275", "277", "278", "280", "283",
    "285", "287", "297", "301", "304", "405", "409", "422", "424", "429", "451", "469",
    "475", "482", "484", "501", "502", "503", "511", "572", "601", "605", "608", "610",
    "611", "612", "637", "642", "643", "662", "664", "669", "701", "721", "902", "903",
    "904", "915"
];

var stopsNamesIdsMap = [];
stopsNamesIdsMap['AWF'] = '113'
stopsNamesIdsMap['Agencja Kraków Wschód'] = '462'
stopsNamesIdsMap['Balicka Wiadukt'] = '134'
stopsNamesIdsMap['Bardosa'] = '449'
stopsNamesIdsMap['Batorego'] = '78'
stopsNamesIdsMap['Białucha'] = '130'
stopsNamesIdsMap['Bieńczycka'] = '867'
stopsNamesIdsMap['Bieżanowska'] = '630'
stopsNamesIdsMap['Biprostal'] = '84'
stopsNamesIdsMap['Blokowa'] = '461'
stopsNamesIdsMap['Borek Fałęcki'] = '747'
stopsNamesIdsMap['Borek Fałęcki I'] = '824'
stopsNamesIdsMap['Borsucza'] = '612'
stopsNamesIdsMap['Brama nr 4'] = '451'
stopsNamesIdsMap['Brama nr 5'] = '453'
stopsNamesIdsMap['Bratysławska'] = '61'
stopsNamesIdsMap['Bronowice'] = '89'
stopsNamesIdsMap['Bronowice Małe'] = '135'
stopsNamesIdsMap['Bronowice Wiadukt'] = '136'
stopsNamesIdsMap['Brożka'] = '613'
stopsNamesIdsMap['Centralna'] = '409'
stopsNamesIdsMap['Centrum Kongresowe ICE'] = '3039'
stopsNamesIdsMap['Chmieleniec'] = '2691'
stopsNamesIdsMap['Cichy Kącik'] = '87'
stopsNamesIdsMap['Cienista'] = '3037'
stopsNamesIdsMap['Cmentarz Podgórski'] = '621'
stopsNamesIdsMap['Cmentarz Rakowicki'] = '124'
stopsNamesIdsMap['Cracovia'] = '318'
stopsNamesIdsMap['Cystersów'] = '129'
stopsNamesIdsMap['Czerwone Maki P+R'] = '3038'
stopsNamesIdsMap['Czyżyny'] = '407'
stopsNamesIdsMap['DH Wanda'] = '392'
stopsNamesIdsMap['Dajwór'] = '915'
stopsNamesIdsMap['Darwina'] = '435'
stopsNamesIdsMap['Dauna'] = '632'
stopsNamesIdsMap['Dunikowskiego'] = '388'
stopsNamesIdsMap['Dworcowa'] = '623'
stopsNamesIdsMap['Dworzec Główny'] = '131'
stopsNamesIdsMap['Dworzec Główny Tunel'] = '1173'
stopsNamesIdsMap['Dworzec Główny Zachód'] = '2608'
stopsNamesIdsMap['Dworzec Płaszów Estakada'] = '2870'
stopsNamesIdsMap['Dworzec Towarowy'] = '70'
stopsNamesIdsMap['Dąbie'] = '370'
stopsNamesIdsMap['Elektromontaż'] = '464'
stopsNamesIdsMap['Fabryczna'] = '368'
stopsNamesIdsMap['Filharmonia'] = '322'
stopsNamesIdsMap['Francesco Nullo'] = '367'
stopsNamesIdsMap['Gromadzka'] = '560'
stopsNamesIdsMap['Grota-Roweckiego'] = '2687'
stopsNamesIdsMap['Głowackiego'] = '1049'
stopsNamesIdsMap['Hala Targowa'] = '363'
stopsNamesIdsMap['Jarzębiny'] = '2685'
stopsNamesIdsMap['Jeżynowa'] = '452'
stopsNamesIdsMap['Jubilat'] = '319'
stopsNamesIdsMap['Kabel'] = '624'
stopsNamesIdsMap['Kampus UJ'] = '2690'
stopsNamesIdsMap['Kapelanka'] = '576'
stopsNamesIdsMap['Klasztorna'] = '429'
stopsNamesIdsMap['Kleeberga'] = '382'
stopsNamesIdsMap['Klimeckiego'] = '946'
stopsNamesIdsMap['Kobierzyńska'] = '584'
stopsNamesIdsMap['Koksochemia'] = '457'
stopsNamesIdsMap['Kombinat'] = '459'
stopsNamesIdsMap['Komorowskiego'] = '313'
stopsNamesIdsMap['Kopiec Wandy'] = '450'
stopsNamesIdsMap['Korona'] = '571'
stopsNamesIdsMap['Krowodrza Górka'] = '63'
stopsNamesIdsMap['Kuklińskiego'] = '567'
stopsNamesIdsMap['Kurdwanów'] = '744'
stopsNamesIdsMap['Limanowskiego'] = '569'
stopsNamesIdsMap['Lipińskiego'] = '2686'
stopsNamesIdsMap['Lipska'] = '561'
stopsNamesIdsMap['Lubicz'] = '126'
stopsNamesIdsMap['M1 Al. Pokoju'] = '930'
stopsNamesIdsMap['Mały Płaszów'] = '1263'
stopsNamesIdsMap['Meksyk'] = '454'
stopsNamesIdsMap['Miodowa'] = '362'
stopsNamesIdsMap['Mistrzejowice'] = '375'
stopsNamesIdsMap['Miśnieńska'] = '2538'
stopsNamesIdsMap['Mrozowa'] = '460'
stopsNamesIdsMap['Muzeum Inżynierii Miejskiej'] = '2726'
stopsNamesIdsMap['Muzeum Lotnictwa'] = '2811'
stopsNamesIdsMap['Norymberska'] = '2688'
stopsNamesIdsMap['Nowosądecka'] = '715'
stopsNamesIdsMap['Nowy Bieżanów'] = '2580'
stopsNamesIdsMap['Nowy Kleparz'] = '71'
stopsNamesIdsMap['Nowy Prokocim'] = '2582'
stopsNamesIdsMap['Ofiar Dąbia'] = '369'
stopsNamesIdsMap['Oleandry'] = '823'
stopsNamesIdsMap['Orzeszkowej'] = '361'
stopsNamesIdsMap['Os.Kolorowe'] = '413'
stopsNamesIdsMap['Os.Na Skarpie'] = '424'
stopsNamesIdsMap['Os.Piastów'] = '378'
stopsNamesIdsMap['Os.Zgody'] = '418'
stopsNamesIdsMap['Os.Złotego Wieku'] = '377'
stopsNamesIdsMap['PH'] = '466'
stopsNamesIdsMap['PT'] = '614'
stopsNamesIdsMap['Park Jordana'] = '960'
stopsNamesIdsMap['Piaski Nowe'] = '716'
stopsNamesIdsMap['Piasta Kołodzieja'] = '379'
stopsNamesIdsMap['Plac Bohaterów Getta'] = '570'
stopsNamesIdsMap['Plac Inwalidów'] = '79'
stopsNamesIdsMap['Plac Wolnica'] = '360'
stopsNamesIdsMap['Plac Wszystkich Świętych'] = '1360'
stopsNamesIdsMap['Plaza'] = '3033'
stopsNamesIdsMap['Pleszów'] = '458'
stopsNamesIdsMap['Poczta Główna'] = '357'
stopsNamesIdsMap['Politechnika'] = '73'
stopsNamesIdsMap['Powstańców Wielkopolskich'] = '568'
stopsNamesIdsMap['Prokocim'] = '637'
stopsNamesIdsMap['Prokocim Szpital'] = '682'
stopsNamesIdsMap['Pędzichów'] = '72'
stopsNamesIdsMap['Rakowicka'] = '128'
stopsNamesIdsMap['Reymana'] = '320'
stopsNamesIdsMap['Rondo 308. Dywizjonu'] = '3041'
stopsNamesIdsMap['Rondo Czyżyńskie'] = '408'
stopsNamesIdsMap['Rondo Grzegórzeckie'] = '365'
stopsNamesIdsMap['Rondo Hipokratesa'] = '2539'
stopsNamesIdsMap['Rondo Kocmyrzowskie im. Ks. Gorzelanego'] = '2745'
stopsNamesIdsMap['Rondo Matecznego'] = '610'
stopsNamesIdsMap['Rondo Mogilskie'] = '125'
stopsNamesIdsMap['Rondo Piastowskie'] = '383'
stopsNamesIdsMap['Ruczaj'] = '589'
stopsNamesIdsMap['Rzebika'] = '1262'
stopsNamesIdsMap['Rzemieślnicza'] = '611'
stopsNamesIdsMap['Salwator'] = '311'
stopsNamesIdsMap['Sanktuarium Bożego Miłosierdzia'] = '615'
stopsNamesIdsMap['Smolki'] = '572'
stopsNamesIdsMap['Solvay'] = '746'
stopsNamesIdsMap['Starowiślna'] = '358'
stopsNamesIdsMap['Stary Kleparz'] = '3032'
stopsNamesIdsMap['Stella-Sawickiego'] = '112'
stopsNamesIdsMap['Stradom'] = '359'
stopsNamesIdsMap['Struga'] = '423'
stopsNamesIdsMap['Suche Stawy'] = '2548'
stopsNamesIdsMap['Szpital Narutowicza'] = '3036'
stopsNamesIdsMap['Szwedzka'] = '575'
stopsNamesIdsMap['Słomiana'] = '577'
stopsNamesIdsMap['TAURON Arena Kraków Al. Pokoju'] = '2871'
stopsNamesIdsMap['TAURON Arena Kraków Wieczysta'] = '3040'
stopsNamesIdsMap['Teatr Bagatela'] = '77'
stopsNamesIdsMap['Teatr Ludowy'] = '420'
stopsNamesIdsMap['Teatr Variété'] = '2859'
stopsNamesIdsMap['Teligi'] = '681'
stopsNamesIdsMap['Uniwersytet Ekonomiczny'] = '127'
stopsNamesIdsMap['Uniwersytet Jagielloński'] = '321'
stopsNamesIdsMap['Uniwersytet Pedagogiczny'] = '88'
stopsNamesIdsMap['Urzędnicza'] = '83'
stopsNamesIdsMap['Walcownia'] = '463'
stopsNamesIdsMap['Wawel'] = '325'
stopsNamesIdsMap['Wańkowicza'] = '2543'
stopsNamesIdsMap['Wesele'] = '133'
stopsNamesIdsMap['Wiadukty'] = '434'
stopsNamesIdsMap['Witosa'] = '718'
stopsNamesIdsMap['Wlotowa'] = '634'
stopsNamesIdsMap['Wzgórza Krzesławickie'] = '442'
stopsNamesIdsMap['Zabłocie'] = '1154'
stopsNamesIdsMap['Zajezdnia Nowa Huta'] = '465'
stopsNamesIdsMap['Ćwiklińskiej'] = '679'
stopsNamesIdsMap['Łagiewniki'] = '922'
stopsNamesIdsMap['Łagiewniki ZUS'] = '2821'
stopsNamesIdsMap['Św.Gertrudy'] = '2741'
stopsNamesIdsMap['Św.Wawrzyńca'] = '2742'
