(function() {
  'use strict';
  var cleanBtn = document.querySelector('#js-clean');

  cleanBtn.addEventListener('click', function(e) {

    // unregister
    if (navigator.serviceWorker) {
      navigator.serviceWorker.getRegistration(SWfile)
        .then(function (registration) {
          if (registration && registration.unregister) {
            registration.unregister().then(function (isUnRegistered) {
              if (isUnRegistered) {
                console.log('[SW]: UnRegistration succeeded.');
              } else {
                console.log('[SW]: UnRegistration failed.');
              }
            });
          }
        }).catch(function (error) {
          console.log('[SW]: UnRegistration failed with. ' + error);
        });
    }
  });

})(window);