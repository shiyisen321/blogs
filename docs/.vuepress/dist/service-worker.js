/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e16c7b255f2c992f8e8236f3c7eb30b1"
  },
  {
    "url": "assets/css/0.styles.b6dd7b73.css",
    "revision": "0740bbc65e24bcec9fe967a4604ac700"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d1ae7449.js",
    "revision": "8daa29f2ddef41434262b4fddbfd971d"
  },
  {
    "url": "assets/js/11.ab1f0bc2.js",
    "revision": "60dbe24750ff5510fe80996ef53d3f02"
  },
  {
    "url": "assets/js/2.d14cb3cd.js",
    "revision": "0f4735a5d6808218e814de613ee708b9"
  },
  {
    "url": "assets/js/3.a2bff7f5.js",
    "revision": "769dbe712ddc5e203e20064688178e9a"
  },
  {
    "url": "assets/js/4.34b068a6.js",
    "revision": "547e367633bbd5c05f7c02f48c69ef21"
  },
  {
    "url": "assets/js/5.6612e949.js",
    "revision": "305a80a48dc9310d8fbb3b92f4482ccd"
  },
  {
    "url": "assets/js/6.aad2f10a.js",
    "revision": "3e5dbe7460dd3b204a5b7bad14e13c41"
  },
  {
    "url": "assets/js/7.ce58e295.js",
    "revision": "ff3262215680fd0a07eb672f849cb153"
  },
  {
    "url": "assets/js/8.15d59f7e.js",
    "revision": "2486e36eafe2261048d25345d1d15e4d"
  },
  {
    "url": "assets/js/9.b1039e6c.js",
    "revision": "e756ac4b0b6dd792f972a963ac765cfd"
  },
  {
    "url": "assets/js/app.d0e021c5.js",
    "revision": "69e34d60a6118d8303ab9072c06cfa26"
  },
  {
    "url": "element-ui-2019-07-04/index.html",
    "revision": "f36c30889788491a23ce6348aff87d21"
  },
  {
    "url": "guide/index.html",
    "revision": "22d0bb0acf3a97ab8f0b249e69998629"
  },
  {
    "url": "img/edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "img/shi.jpg",
    "revision": "2809d6b2d82753fff39157da5528ed28"
  },
  {
    "url": "index.html",
    "revision": "8e452c82c186d992b96ce5e9c46ee2fe"
  },
  {
    "url": "VUE学习/elementUI/02-11.html",
    "revision": "a9013b5e75fc0e30a24df64e5f1ceb49"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
