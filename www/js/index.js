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
    var storedData = myApp.formGetData('my-favourites');
    console.log(storedData['stop']);
    $$('#autocomplete-dropdown-stop-popup').val(storedData['stop']);
    $$('#autocomplete-dropdown-lines-popup').val(storedData['lines']);
}

function setData() {
    var storedData = myApp.formStoreData('my-favourites', {
        'stop': $$('#autocomplete-dropdown-stop-popup').val(),
        'line': $$('#autocomplete-dropdown-lines-popup').val()
    });
}


function displayData() {
    // $$
}
