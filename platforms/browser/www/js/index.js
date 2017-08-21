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
                    id: "0"
					},
				],
            // Template 7 template to render each item
            template: '<li class="item-content">' +
                '<div class="item-inner">' +
                '<div class="item-title">{{title}}</div><div class="remove" onclick="removeItem({{id}})">X</div>' +
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
