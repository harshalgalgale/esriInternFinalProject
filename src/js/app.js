require([
  'dojo/topic',

  'app/config',
  'app/widget/Map',
  'app/widget/NavBar',

  'dojo/i18n!./js/nls/strings.js',

  'dojo/domReady!'],
function(
  topic,
  config, Map, NavBar,
  strings
) {
  'use strict';

  // start map widget
  var map = new Map({
    config: config,
    strings: strings
  }, 'mapNode');
  map.startup();
  map.loadServices();
//  map.initEditing();

  // start nav widget
  var navBar = new NavBar({
    config: config,
    strings: strings
  }, 'navBarNode');
  navBar.startup();

  // set up topics
  topic.subscribe('basemap/set', function(args) {
    map.setBasemap(args.basemap);
  });

  // set page title
  window.document.title = strings.appTitle;
});