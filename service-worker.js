self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("scoutnet-cache").then((cache) => {
      return cache.addAll([
        "home.html",
        "icons/logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
