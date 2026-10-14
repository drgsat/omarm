const CACHE_NAME = 'omar-mokhtar-v2';
const APP_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './omar.xml',
  './icons/icon.jpg',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // إذا كان الطلب لفحص omar.xml نحاول جلبه من الشبكة أولاً مع الرجوع للكاش عند انقطاع النت
  if (url.pathname.endsWith('omar.xml')) {
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // لبقية الملفات: Cache First للسرعة القصوى
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
