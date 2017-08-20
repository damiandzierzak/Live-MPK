var myApp = new Framework7({
    modalTitle: 'Framework7',
    material: true,
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {});
var rightView = myApp.addView('.view-right', {
    name: 'right'
});

myApp.onPageInit('autocomplete', function (page) {
    setAddButtonListener();
});

function setAddButtonListener() {
    $$('#add-button').on('click', function () {
        var popupHTML = '<div class="popup">' +
            '<div class="content-block">' +
            '<p>Popup created dynamically.</p>' +
            '<p><a href="#" class="close-popup">Close me</a></p>' +
            '</div>' +
            '</div>'
        myApp.popup(popupHTML);
    });
}



function setData() {
    var storage = window.localStorage;
}


function displayData() {
    // $$
}
