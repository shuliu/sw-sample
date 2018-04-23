'use strict';

var baseJS = '/javascripts/';
var baseCSS = '/stylesheets/';
var baseImg = '/images/';

var SWfile = baseJS + 'service-worker.js';

// register
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(SWfile).then(function (registration) {
    console.log('[SW]: Registration succeeded.');
  }).catch(function (error) {
    console.log('[SW]: Registration failed with.' + error);
  });
}

self.addEventListener('install', event => {
  console.log('sw installing...');
});

self.addEventListener('activate', event => {
  console.log('sw now ready!');
});

self.addEventListener('fetch', event => {
  console.log(event.request.url);
  return;
});


  // navigator.serviceWorker.getRegistrations().then(function(registrations) {
  //   for(let registration of registrations) {
  //     registration.unregister();
  //     console.log('clean');
  //   }
  //   console.log('end');
  // });