# Service Worker

## 特性

 - web app 與 service 之間的代理
 - 有效的處理離線體驗
 - 操作上比 AppCache 更細緻，且每24小時至少會取一次實際路徑內容
 - 大量使用 Promise


##  安全性
 - 必須是 https 以避免中間人攻擊
	 - localhost 可不用
	 - github page 本身有 http 所以可以當測試
 - firfox 無痕模式下不可用

## 支援

 - IE Edge 17 (Windows 10 release 17063 預覽版本 - 2017/12/19)
 - firefox 44 (2016)
 - chrome 45 (2015)
 - safari 11.1 (2018/03/29)
 - opera 32 (2015)

### Mobile

#### ios
 - IOS safari 11.3 (2018/03/29)

#### android
 - android 5-6x chrome 部分支援 (2017)
 - chrome android 64 (2018/01/23)
 - UC for Android 11.8 (2016)
 - Samsung Internet 4 (2016)

#### other
 - firefox android 57 (2017)
 - opera mini (not supported)
 - opera mobile 37 部分支援 (2017)
 - IE mobile (not supported)


## 生命週期

 1. installing
	 1. install → installed
	 2. failed → redundant
 2. installed
 3. activating
	 1. → activated
	 2. failed → redundant
 4. activated
	 1. (new service worker)
  5. redundant 廢棄




![w-lifecycl](/Users/shuliu/Desktop/service-worker/images/sw-lifecycle.png)



### 註冊

```javascript
var baseJS = '/javascripts/';
var baseCSS = '/stylesheets/';
var baseImg = '/images/';

var SWfile = baseJS + 'service-worker.js';

navigator.serviceWorker.register(SWfile, {scope: baseJS}).then(function (registration) {
    console.log('[SW]: Registration succeeded.');
}).catch(function (error) {
    console.log('[SW]: Registration failed with.' + error);
});
```





## 相關 

 - [can i use - service worker](https://caniuse.com/#search=service%20worker)
 - [mozilla developer - service worker api](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)
 - [google developer - service workers](https://developers.google.com/web/fundamentals/primers/service-workers/?hl=zh-tw)


 