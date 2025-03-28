'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "159a0a32ecd69924b1cb383f58317d90",
"assets/AssetManifest.json": "83f89b0fa43c41a627e49f9a766c61e9",
"assets/assets/grassy/0.png": "d44a5879f3944d20704ca6c8f05459d6",
"assets/assets/grassy/1.png": "0dbf8076604909bba7cc12ac5a12c150",
"assets/assets/grassy/2.png": "505e6b64ceae753f8d7fe4136383fd78",
"assets/assets/grassy/3.png": "716028c39410e02d1ff7aacfaa84be83",
"assets/assets/grassy/4.png": "8def1c920f77e2fe4da44deb56798dd8",
"assets/assets/grassy/5.png": "bc9af5b741bfa4f5841ea630300f008f",
"assets/assets/grassy/6.png": "cc858c90417368180f55a56fe239610b",
"assets/assets/grassy/7.png": "e385bcc96e01411bf87d308449e9094b",
"assets/assets/grassy/8.png": "6a55764359ddf0de6ffaadcbd2f6e6b8",
"assets/assets/grassy/exploded.png": "dd16a5529d3696cb929dfaa20436a21a",
"assets/assets/grassy/flag.png": "f728810b073a333f0747ada9fc05ca6c",
"assets/assets/grassy/preview.png": "03bb1bcc59a69371509c47210a30c46d",
"assets/assets/grassy/undiscovered1.png": "fd70446b85b03a43d63974ee062687d9",
"assets/assets/grassy/undiscovered2.png": "5246c945616f01c00a293a2a8a83a437",
"assets/assets/grassy/undiscovered3.png": "4b1cfb61883ae95962fc366c639f6d1d",
"assets/assets/grassy/undiscovered4.png": "0fdaa843322b213af61d16477f0868fc",
"assets/assets/grassy/undiscovered5.png": "3e8228493f7898e430ed64d57c69f58a",
"assets/assets/plain/0.png": "bdee8821da5ed3819cfc537ffd8c8363",
"assets/assets/plain/1.png": "b96623b8e549f341adca536f8100211b",
"assets/assets/plain/2.png": "616e5c8d0bcfd87a795cd10d5e0258b4",
"assets/assets/plain/3.png": "9668ec30125bbdd132dc580e89367df4",
"assets/assets/plain/4.png": "36696120209bcea1a0b5c9955515f3dc",
"assets/assets/plain/5.png": "01be843f4529207bf547d2c186efbbe1",
"assets/assets/plain/6.png": "eb856f794a22a0e520fd3b692f43879b",
"assets/assets/plain/7.png": "9172a2732b927a18859407cdfbf2e8ee",
"assets/assets/plain/8.png": "489d383639060997e69218a8585dc8b0",
"assets/assets/plain/exploded.png": "90f842452b1b2a2f1384d2822f314892",
"assets/assets/plain/flag.png": "773501cc50c88ece829ec7bf6f89917d",
"assets/assets/plain/preview.png": "b89da7109303322a6c2eb2301f5e42e9",
"assets/assets/plain/undiscovered1.png": "120f922ab97fa13731e861db05882752",
"assets/assets/plain/undiscovered2.png": "103094bac52defec8480d7b637e2e848",
"assets/assets/plain/undiscovered3.png": "e6f9e4f0adfdc03838d9d88c98106fc5",
"assets/assets/plain/undiscovered4.png": "9f23986468527b2c640949398876c0ba",
"assets/assets/plain/undiscovered5.png": "56430fdbd8f151dcd2f82616d1415637",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2f4e2862c4d576aeb90fb5c7e4a47c23",
"assets/NOTICES": "2d99507926ad75675fe42ac5634dd9b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf5edc02784664b0914f5fe9e2a38d34",
"/": "bf5edc02784664b0914f5fe9e2a38d34",
"main.dart.js": "498565df7b2e39356968ddc1b55d7ff8",
"manifest.json": "f585c3f04f469caf228938406c126eb9",
"version.json": "18d77c4b39fed17dc72ed2bb157baf49"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
