function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    console.log("init");

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        $(document).ready(function () {
            onDeviceReady();
        });

    }
}

var stopsNamesArray = [
	'AWF',
	'Agencja Kraków Wschód',
	'Balicka Wiadukt',
	'Bardosa',
	'Basztowa LOT',
	'Batorego',
	'Białucha',
	'Bieńczycka',
	'Bieżanowska',
	'Biprostal',
	'Blokowa',
	'Boisko Kabel',
	'Borek Fałęcki',
	'Borek Fałęcki I',
	'Borsucza',
	'Brama nr 4',
	'Brama nr 5',
	'Bratysławska',
	'Bronowice',
	'Bronowice Małe',
	'Bronowice Wiadukt',
	'Brożka',
	'Centralna',
	'Centrum Kongresowe ICE',
	'Chmieleniec',
	'Cichy Kącik',
	'Cienista',
	'Cmentarz Grębałów Zachód',
	'Cmentarz Podgórski',
	'Cmentarz Rakowicki',
	'Cracovia',
	'Cystersów',
	'Czerwone Maki P+R',
	'Czyżyny',
	'DH Wanda',
	'Dajwór',
	'Darwina',
	'Dauna',
	'Dunikowskiego',
	'Dworcowa',
	'Dworzec Główny',
	'Dworzec Główny Tunel',
	'Dworzec Główny Tunel',
	'Dworzec Główny Zachód',
	'Dworzec Płaszów Estakada',
	'Dworzec Towarowy',
	'Dworzec Towarowy',
	'Dąbie',
	'Elektromontaż',
	'Fabryczna',
	'Filharmonia',
	'Fort Mogiła',
	'Francesco Nullo',
	'Gromadzka',
	'Grota Roweckiego',
	'Grota-Roweckiego',
	'Głowackiego',
	'Hala Targowa',
	'Hala Targowa',
	'Jarzębiny',
	'Jeżynowa',
	'Jubilat',
	'Kabel',
	'Kampus UJ',
	'Kapelanka',
	'Klasztorna',
	'Kleeberga',
	'Klimeckiego',
	'Kobierzyńska',
	'Kocmyrzowska',
	'Koksochemia',
	'Kombinat',
	'Komorowskiego',
	'Kopiec Wandy',
	'Kordylewskiego',
	'Korona',
	'Kraków Arena Al. Pokoju',
	'Kraków Plaza',
	'Krowodrza Górka',
	'Krowodrza Górka',
	'Kuklińskiego',
	'Kurdwanów',
	'Kurdwanów pętla',
	'Lema',
	'Limanowskiego',
	'Lipińskiego',
	'Lipska',
	'Lubicz',
	'M1 Al. Pokoju',
	'Mały Płaszów',
	'Meksyk',
	'Miodowa',
	'Miodowa',
	'Mistrzejowice',
	'Miśnieńska',
	'Most Grunwaldzki',
	'Mrozowa',
	'Muzeum Inżynierii Miejskiej',
	'Muzeum Lotnictwa',
	'Norymberska',
	'Nowohucka',
	'Nowosądecka',
	'Nowy Bieżanów',
	'Nowy Kleparz',
	'Nowy Prokocim',
	'Ofiar Dąbia',
	'Oleandry',
	'Orzeszkowej',
	'Os.Kolorowe',
	'Os.Na Skarpie',
	'Os.Piastów',
	'Os.Zgody',
	'Os.Złotego Wieku',
	'PH',
	'PT',
	'Park Jordana',
	'Piaski Nowe',
	'Piasta Kołodzieja',
	'Plac Bohaterów Getta',
	'Plac Bohaterów Getta',
	'Plac Centralny',
	'Plac Centralny im. R.Reagana',
	'Plac Inwalidów',
	'Plac Wolnica',
	'Plac Wszystkich Świętych',
	'Plaza',
	'Pleszów',
	'Poczta Główna',
	'Politechnika',
	'Politechnika',
	'Powstańców Wielkopolskich',
	'Prokocim',
	'Prokocim',
	'Prokocim Szpital',
	'Prądnicka',
	'Prądnicka',
	'Pędzichów',
	'Rakowicka',
	'Reymana',
	'Rondo 308. Dywizjonu',
	'Rondo Czyżyńskie',
	'Rondo Grzegórzeckie',
	'Rondo Grzegórzeckie',
	'Rondo Hipokratesa',
	'Rondo Kocmyrzowskie',
	'Rondo Kocmyrzowskie im. Ks. Gorzelanego',
	'Rondo Matecznego',
	'Rondo Mogilskie',
	'Rondo Mogilskie',
	'Rondo Piastowskie',
	'Rostworowskiego',
	'Ruczaj',
	'Ruczaj I',
	'Rzebika',
	'Rzemieślnicza',
	'Salwator',
	'Sanktuarium Bożego Miłosierdzia',
	'Smolki',
	'Solvay',
	'Starowiślna',
	'Starowiślna',
	'Stary Kleparz',
	'Stella-Sawickiego',
	'Stradom',
	'Struga',
	'Suche Stawy',
	'Szpital Narutowicza',
	'Szwedzka',
	'Słomiana',
	'TAURON Arena Kraków Al. Pokoju',
	'TAURON Arena Kraków Wieczysta',
	'Teatr Bagatela',
	'Teatr Ludowy',
	'Teatr Variété',
	'Teligi',
	'Uniwersytet Ekonomiczny',
	'Uniwersytet Jagielloński',
	'Uniwersytet Pedagogiczny',
	'Urzędnicza',
	'Walcownia',
	'Wawel',
	'Wańkowicza',
	'Wesele',
	'Wiadukty',
	'TAURON Arena Kraków Wieczysta',
	'Witosa',
	'Wlotowa',
	'Wzgórza Krzesławickie',
	'Zabłocie',
	'Zajezdnia Nowa Huta',
	'Ćwiklińskiej',
	'Łagiewniki',
	'Łagiewniki',
	'Łagiewniki ZUS',
	'Św. Gertrudy',
	'Św. Wawrzyńca',
	'Św. Wawrzyńca',
	'Św.Gertrudy',
	'Św.Wawrzyńca'
];

var stopsNamesIdsMap = [];
  stopsNamesIdsMap['AWF'] = '113'
  stopsNamesIdsMap['Agencja Kraków Wschód'] = '462'
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
    $('#error-msg').text('#stopName', '#stopsNamesIdsMap[stopName]', '#lineNr');
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/passageInfo/stopPassages/stop?stop=' + stopsNamesIdsMap[stopName] + '&mode=departure';

    $.getJSON(queryString, function (results) {
        var resultText = "";
        for (i = 0; i < results.actual.length; i++) {
            if (results.actual[i].routeId == linesMap[lineNr]) {
                resultText += parseTime(results.actual[i].mixedTime);
                resultText += "\n";
            }
        }
        $('#error-msg').text(resultText);

    }).fail(function (jqXHR) {
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });

}


function getRoatsList(lineNr) {
    var queryString =
        'http://www.ttss.krakow.pl/internetservice/services/routeInfo/routeStops?routeId=' + linesMap[lineNr];

}


function autocompleteStops() {
    console.log("autocompleteStops");
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
