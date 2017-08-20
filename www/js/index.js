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

function checkFavourites() {
    if (window.localStorage.getItem("key-stop") === null) {
        $$('#no-favourite-container').show()
    } else {
        $$('#favourite-list').show()
    }
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

function fillSavedData() {
    //var storedData = myApp.formGetData('my-favourites');
    //console.log(storedData['stop']);
    $$('#autocomplete-dropdown-stop-popup').val(window.localStorage.getItem("key-stop"));
    $$('#autocomplete-dropdown-lines-popup').val(window.localStorage.getItem("key-line"));
}

function setData() {
    // var storedData = myApp.formStoreData('my-favourites', {
    //     'stop': $$('#autocomplete-dropdown-stop-popup').val(),
    //     'line': $$('#autocomplete-dropdown-lines-popup').val()
    // });

    window.localStorage.setItem("key-stop", $$('#autocomplete-dropdown-stop-popup').val())
    window.localStorage.setItem("key-line", $$('#autocomplete-dropdown-lines-popup').val())
}


function displayData() {
    // $$
}
