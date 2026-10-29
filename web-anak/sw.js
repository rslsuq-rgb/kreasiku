/* Service worker sederhana: simpan berkas inti agar bisa dibuka offline.
   Strategi: jaringan dulu, cache sebagai cadangan — supaya pembaruan
   situs langsung terlihat tanpa menunggu cache kedaluwarsa. */
const CACHE = "belajar-yuk-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./mewarnai.html",
  "./berhitung.html",
  "./menulis.html",
  "./untuk-orang-tua.html",
  "./assets/css/style.css",
  "./assets/js/app.js",
  "./assets/js/gambar.js",
  "./assets/js/mewarnai.js",
  "./assets/js/berhitung.js",
  "./assets/js/menulis.js",
  "./assets/img/favicon.svg",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => {
          if (hit) return hit;
          return new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } });
        })
      )
  );
});
