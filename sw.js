// Angela Reed card: minimal service worker.
// It only exists so phones treat the card as an installable app.
// It caches nothing, so visitors always see the latest version of the card.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
