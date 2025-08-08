// sw.js — robuste Versionierung + Update-Strategie
const CACHE_VERSION = 'v6';                           // <- bei jedem Release hochzählen
const STATIC_CACHE  = `cubeclock-static-${CACHE_VERSION}`;

self.addEventListener('install', (event) => {
  // Sofort aktiv werden (keine "alte" SW warten lassen)
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      // Nur die wirklich statischen Sachen hier vorcachen
      // index.html holen wir immer "network-first" (siehe fetch)
      return cache.addAll([
        './',
        'manifest.json',
        'spacebar_icon.png',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Alte Caches aufräumen + sofort Kontrolle übernehmen
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k !== STATIC_CACHE)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// Hilfsfunktionen
async function networkFirst(req) {
  try {
    const fresh = await fetch(req);
    const cache = await caches.open(STATIC_CACHE);
    cache.put(req, fresh.clone());
    return fresh;
  } catch {
    return caches.match(req);
  }
}

async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  const fresh = await fetch(req);
  const cache = await caches.open(STATIC_CACHE);
  cache.put(req, fresh.clone());
  return fresh;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const accept = req.headers.get('accept') || '';

  // HTML/Navigationsanfragen -> IMMER network-first (damit neue index.html kommt)
  if (req.mode === 'navigate' || accept.includes('text/html')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Assets (Bilder, CSS, JS, Manifest) -> cache-first
  const url = new URL(req.url);
  if (
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('/manifest.json')
  ) {
    event.respondWith(cacheFirst(req));
    return;
  }

  // Fallback
  event.respondWith(cacheFirst(req));
});
