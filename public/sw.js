const CACHE_NAME = 'islamic-blog-v2';
const INITIAL_ASSETS = [
  '/',
  '/search/',
  '/audios/',
  '/videos/',
  '/sermon/',
  '/muqolat/',
  '/biography/'
];

// Install Event - Cache initial assets safely one by one
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of INITIAL_ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn(`PWA: Failed to pre-cache ${asset}:`, err);
        }
      }
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Stale-while-revalidate / Cache-first strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // If valid response, update the cache dynamically
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed, return cached response if available
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});