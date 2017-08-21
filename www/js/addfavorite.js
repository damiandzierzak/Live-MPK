myApp.onPageInit('autocomplete', function (page) {
    initStopsListFav();
    initLinesListFav();
    setAddOnCLickListener();
});


function setAddOnCLickListener() {
    $$('#add_button').on('click', function () {
        if (validateInputs()) {
            console.log("Favorite: Stop: " + $$('#autocomplete-dropdown-stops-popup').val() +
                " Line: " + $$('#autocomplete-dropdown-lines-popup').val());

            setData($$('#autocomplete-dropdown-stops-popup').val(), $$('#autocomplete-dropdown-lines-popup').val());
            checkFavourites();
            mainView.router.back()
        }
    });

}

function validateInputs() {
    if (!$$('#autocomplete-dropdown-stops-popup').val() || !$$('#autocomplete-dropdown-lines-popup').val()) {
        myApp.alert(' Wypelnij wszystkie pola! ');
        return false;
    }
    return true;
}

function initStopsListFav() {

    var autocompleteStops = myApp.autocomplete({
        input: '#autocomplete-dropdown-stops-popup',
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


function initLinesListFav() {
    var autocompleteLine = myApp.autocomplete({
        input: '#autocomplete-dropdown-lines-popup',
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
