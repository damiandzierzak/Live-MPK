var stopsNamesArray = [
    "AWF",
    "Agencja Kraków Wschód",
    "Balicka Wiadukt",
    "Bardosa",
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
    "1", /*"2",*/ "3", "4", /*"5",*/ "6", /*"7",*/ "8", "9", /*"10", "11", "12",*/
    "13", "14", /*"16",*/ "18", /*"19",*/ "20", /*"21",*/ "22", /*"23",*/ "24",
	"50", "52", "70", "71", "72", "73", "79" /*,
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
    "904", "915"*/
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
