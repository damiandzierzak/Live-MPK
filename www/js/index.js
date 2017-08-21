var myApp = new Framework7({
    modalTitle: 'Framework7',
    material: true,
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {});
var rightView = myApp.addView('.view-right', {
    name: 'right'
});

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

    setAddButtonListener();
    checkFavourites();
}
var myList;

function checkFavourites() {
    if (window.localStorage.getItem("key-stop") === null) {
        $$('#no-favourite-container').show()
    } else {
        myList = myApp.virtualList('.list-block.virtual-list', {
            // Array with items data
            items: [
                {
                    title: "Tu się pojawią ulubione",
                    id: "-1"
					},
				],
            // Template 7 template to render each item
            template: '<li class="item-content">' +
                '<div class="item-inner">' +
                '<div class="item-title" onclick="onItemClicked({{id}})">{{title}}</div><div class="remove" onclick="removeItem({{id}})">X</div>' +
                '</div>' +
                '</li>'
        });

        var stopsList = JSON.parse(window.localStorage.getItem("key-stops-list"));
        var lineList = JSON.parse(window.localStorage.getItem("key-line-list"));

        if (stopsList != null) {
            for (var i = 0; i <= stopsList.length; i++) {
                myList.replaceItem(i, {
                    title: "Linia: " + lineList[i] + " Przystanek: " + stopsList[i],
                    id: i
                });
            }
        }

        $$('#no-favourite-container').hide()
        $$('#favourite-list').show()
    }
}

function onItemClicked(id) {
    if (id != "-1") {
        console.log("item clicked" + id);
        myApp.popup('.popup');
        $$('.popup').on('popup:opened', function () {
            console.log("popup opened");
            performFavouriteRequest("Batorego", "4");
        });

    }
}


function performFavouriteRequest(stopName, lineNr) {
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
        console.log("getJSON in favourite:" + myApp);
        var myList = myApp.virtualList('.list-block.virtual-list.dwa', {
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
        console.log("getJSON in favourite: po liscie");
        if (0 < arr.length) {
            console.log("getJSON in favourite:>0");
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
            console.log("getJSON in favourite:else");
            myList.replaceItem(0, {
                title: "Nie znaleziono odjazdów"
            });
        }
    });

}

function removeItem(id) {
    console.log("removing item: " + id);
    myList.deleteItem(id);
    var stopsList = JSON.parse(window.localStorage.getItem("key-stops-list"));
    var lineList = JSON.parse(window.localStorage.getItem("key-line-list"));

    stopsList.splice(id, 1);
    lineList.splice(id, 1);

    window.localStorage.setItem("key-stops-list", JSON.stringify(stopsList));
    window.localStorage.setItem("key-line-list", JSON.stringify(lineList));
    //window.localStorage.removeItem();
}

myApp.onPageInit('autocomplete', function (page) {
    //setAddButtonListener();
});

function setAddButtonListener() {
    $$('#add-button').on('click', function () {

        myApp.popup(".popup");

        setSaveButtonClickListener();
        fillSavedData();
    });
}

function setSaveButtonClickListener() {
    $$('#save_button').on('click', function () {
        console.log("save");
        setData();
    });
}


function setData(stop, line) {
    var stopsList = JSON.parse(window.localStorage.getItem("key-stops-list"));
    var lineList = JSON.parse(window.localStorage.getItem("key-line-list"));

    if (stopsList == null) {
        stopsList = [];
    }
    if (lineList == null) {
        lineList = [];
    }

    stopsList.push(stop);

    lineList.push(line);

    window.localStorage.setItem("key-stops-list", JSON.stringify(stopsList))
    window.localStorage.setItem("key-line-list", JSON.stringify(lineList))
}


function displayData() {
    // $$
}
