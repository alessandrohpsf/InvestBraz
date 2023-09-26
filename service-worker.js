const CACHE_NAME = 'cool-cache';


const PRECACHE_ASSETS = [
        './index.html',
        './sobrenos.html',
        './traders.html',
        './contato.html',

        './css/fontawesome-all.min.css',
        './js/main.css',
        './js/breakpoints.min.js',
        './js/browser.min.js',
        './js/jquery.min.js',
        './js/jquery.scrollex.min.js',
        './js/jquery.scrolly.min.js',
        './js/main.js',
        './js/util.js',

        './icons/logo_228x185.png',
        './icons/logo_512x512.png',
        './icons/logo_48x48.png',
        './icons/logo_72x72.png',
        './icons/logo_96x96.png',
        './icons/logo_144x144.png',
        './icons/logo_192x192.png',


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
]


self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(async () => {
      const cache = await caches.open(CACHE_NAME);

      
      const cachedResponse = await cache.match(event.request);

      
      if (cachedResponse !== undefined) {
          
          return cachedResponse;
      } else {
        
          return fetch(event.request)
      };
  });
});