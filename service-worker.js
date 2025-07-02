self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "./",
        "index.html",
        "1st-project.css",
        "1st-project.js",
        "manifest.json"
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
