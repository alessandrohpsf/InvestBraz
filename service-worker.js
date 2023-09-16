var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './sobrenos.html',

        './traders',

        './css/fontawesome-all.min.css',

        './js/main.css',

        './js/breakpoints.min.js',

        './js/browser.min.js',

        './js/jquery.min.js',

        './js/jquery.scrollex.min.js',

        './js/jquery.scrolly.min.js',

        './js/main.js',

        './js/util.js',
        
        './logo_investbraz.png',

        './icons/icone20.png',
        './icons/icone29.png',
        './icons/icone40.png',
        './icons/icone50.png',
        './icons/icone57.png',
        './icons/icone58.png',
        './icons/icone60.png',
        './icons/icone72.png',
        './icons/icone76.png',
        './icons/icone80.png',
        './icons/icone87.png',
        './icons/icone100.png',
        './icons/icone114.png',
        './icons/icone120.png',
        './icons/icone144.png',
        './icons/icone152.png',
        './icons/icone167.png',
        './icons/icone180.png',
        './icons/icone1024.png',

        './images/bg.webp',
        './images/pic01.webp',
        './images/pic02.webp',
        './images/pic03.webp',
        './images/pic04.webp',
        './images/pic05.webp',
        './images/pic06.webp',
        './images/pic07.webp',
        './images/pic08.webp',
        './images/pic09.webp',
        './images/pic10.webp',
        './images/pic11.webp',
        './images/pic12.webp',
        './images/pic13.webp',
        './images/pic14.webp',
        
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});