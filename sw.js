const CACHE_NAME = 'omar-school-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // يتيح عمل التطبيق وتثبيته كـ PWA
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
