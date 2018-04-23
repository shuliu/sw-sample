var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/stylesheets/style.css',
  '/javascripts/main.js'
];

/**
 * install cache
 */
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

/**
 * fatch response
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {

      // 如果 sw 已經完成 response 則直接退出, 減少 http 請求
      if (response) {
        return response;
      }

      // 如果 sw 沒有回傳, 呼叫真實路徑取得 response
      var request = event.request.clone(); // 複製原始 response
      return fetch(request).then(function(httpResponse) {

        // get http response

        // 失敗： 直接回傳回傳 response
        if (!httpResponse || httpResponse.status !== 200) {
          return httpResponse;
        }

        // 成功： 存入 cache
        var responseClone = httpResponse.clone();
        caches.open('my-test-cache-v1').then(function(cache) {
          cache.put(event.request, responseClone);
        });

        return httpResponse;
      });
    })
  );
});

/**
 * update
 */
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});