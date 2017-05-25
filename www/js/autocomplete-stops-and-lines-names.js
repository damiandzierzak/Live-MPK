var myApp = new Framework7({
   modalTitle: 'Framework7',
   material: true,
});
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {});
var rightView = myApp.addView('.view-right', {
   name: 'right'
});
$$(document).on('ajaxStart', function(e) {
   if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
      return;
   }
   myApp.showIndicator();
});
$$(document).on('ajaxComplete', function(e) {
   if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
      return;
   }
   myApp.hideIndicator();
});

myApp.onPageInit('autocomplete', function(page) {
   var autocompleteLine = myApp.autocomplete({
      input: '#autocomplete-dropdown-stops',
      openIn: 'dropdown',
      source: function(autocomplete, query, render) {
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
});

myApp.onPageInit('autocomplete', function(page) {
   var autocompleteLine = myApp.autocomplete({
      input: '#autocomplete-dropdown-lines',
      openIn: 'dropdown',
      source: function(autocomplete, query, render) {
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
});


$$('.panel-left').on('open', function() {
   $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-right').on('open', function() {
   $$('.statusbar-overlay').addClass('with-panel-right');
});
$$('.panel-left, .panel-right').on('close', function() {
   $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});
var dynamicPageIndex = 0;

function createContentPage() {
   mainView.router.loadContent('  <!-- Page, data-page contains page name-->' + '  <div data-page="dynamic-content" class="page">' + '    <!-- Top Navbar-->' + '    <div class="navbar">' + '      <div class="navbar-inner">' + '        <div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>' + '        <div class="center">Dynamic Page ' + (++dynamicPageIndex) + '</div>' + '      </div>' + '    </div>' + '    <!-- Scrollable page content-->' + '    <div class="page-content">' + '      <div class="content-block">' + '        <p>Here is a dynamic page created on ' + new Date() + ' !</p>' + '        <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page">one more page</a>.</p>' + '      </div>' + '    </div>' + '  </div>');
   return;
}
$$(document).on('click', '.ks-generate-page', createContentPage);
myApp.onPageInit('animation', function(page) {
   $$(page.container).find('.start').on('click', function() {
      $$('#animate-me').animate({
         'width': 200,
         'height': 50,
         'margin-left': 50,
         'margin-top': 0,
      }, {
         duration: 600,
         easing: 'swing'
      }).animate({
         'width': 50,
         'height': 200,
         'margin-left': 0,
         'margin-top': 50,
      }, {
         duration: 600,
         easing: 'swing'
      }).animate({
         'width': 100,
         'height': 100,
         'margin-left': 0,
         'margin-top': 0,
      }, {
         duration: 600,
         easing: 'swing',
         complete: function() {
            myApp.alert('Animation completed');
         }
      });
   });
});