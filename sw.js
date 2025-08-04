self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("cubeclock-cache").then((cache) =>
      cache.addAll([
        "index.html",
        "spacebar_icon.png",
        "manifest.json"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});