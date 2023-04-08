'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5b50951d074b0d2388c04155d4be1622",
"assets/assets/animations/action@01.png": "4c61e6e0dd4b72bb6307305ceea641b0",
"assets/assets/animations/action@02.png": "66bf07a246ba83d68b98fe648d11ce9d",
"assets/assets/animations/action@03.png": "cce76156d204474406cf7c49805d8ccd",
"assets/assets/animations/action@04.png": "3ec258fa9a9a683ae20c2faf7ee924f6",
"assets/assets/animations/action@05.png": "76d7950265dc717a7f1d792e5e052f42",
"assets/assets/animations/action@06.png": "0d4e385b5192da80179ff09c8fdbf9aa",
"assets/assets/animations/action@07.png": "f32ee68796ff5f54864b1a53af945db0",
"assets/assets/animations/action@08.png": "4e213977f591a78780416159df0acd10",
"assets/assets/animations/action@09.png": "96d84234135d04959dc8e234987271c5",
"assets/assets/animations/action@10.png": "b5dfef35c4cc375b4bb814d2df68fc33",
"assets/assets/animations/action@11.png": "524328924ce9efa9202538bee8a39123",
"assets/assets/animations/action@12.png": "3b8dcba1a6662014775f15d80efeb86b",
"assets/assets/animations/action@13.png": "b4b5805060aab714e067a72d64d4093c",
"assets/assets/animations/action@14.png": "9fbaef7db628672bd1a50a1c9e33f7f6",
"assets/assets/animations/action@15.png": "07558a3f271d91b1fc7130f895869191",
"assets/assets/animations/action@16.png": "6fe2c22861ee360dbf9482821357a636",
"assets/assets/animations/action@17.png": "1db4887b68a7861d939e102bd86c6631",
"assets/assets/animations/action@18.png": "4a5112de4632f9f67cca83d20b76f13f",
"assets/assets/animations/action@19.png": "f619b27273cb00ab09d85d86aba7b89b",
"assets/assets/animations/action@20.png": "1a4505bb4f9f4c97497247e495edcd4c",
"assets/assets/animations/action@21.png": "72dc4f6509aeeef12e8f0dae1e6027a0",
"assets/assets/animations/action@22.png": "64b586c30b4a899c3d3ce42bfa2b1559",
"assets/assets/animations/action@23.png": "8f871aef961ff96b0713404785c52b5a",
"assets/assets/animations/action@24.png": "acf56ee54b6d8fc602e3c24872f5baf1",
"assets/assets/arms/ancap.png": "9635ebe5ddcd5675a282829118425e62",
"assets/assets/arms/ancom.png": "dc54c1e5b16dde0edd0d1f5443033fdf",
"assets/assets/arms/fash.png": "e7cfa67746125d31121077959b0d4c24",
"assets/assets/arms/leftantena.png": "9c03b3d0b8b95d45ed4286d2f2662d68",
"assets/assets/arms/leftcloud.png": "a7132eeace57e4bd964c78b9ba994e2b",
"assets/assets/arms/leftgoblin.png": "09015070e4c4c399e7ff39337c869800",
"assets/assets/arms/leftgrapple.png": "2aafeb846213999d9c2bd4642da3e649",
"assets/assets/arms/leftleaf.png": "718d08ed8954b95dcb63200c913418d6",
"assets/assets/arms/leftmagic.png": "52615a041a576dc23d476ce7ccad7afd",
"assets/assets/arms/leftpirate.png": "2b742c75291a842fd7f0e2269322f846",
"assets/assets/arms/leftrobotclaw.png": "d3a1cce38e8326ea8692d37e02a6cf4a",
"assets/assets/arms/leftrobotdiamonddrill.png": "71b93d895e53b2e2a430bb803e2fd8bd",
"assets/assets/arms/leftrobotdrill.png": "ab5057786bd4007e55930b0550235149",
"assets/assets/arms/leftstars.png": "67c34601f325568ffeb0a54d054e71af",
"assets/assets/arms/leftstickmin.png": "e376cd23fa95a56128b49d22a9f4d462",
"assets/assets/arms/lefttree.png": "2942746a45b3fa360950164bdeb7a7aa",
"assets/assets/arms/leftvine.png": "426c8820efa938ae0431c742eb3343f0",
"assets/assets/arms/rightantena.png": "5955ea50f1472ed79005572276920670",
"assets/assets/arms/rightcloud.png": "1f5312bc6f89f72e28f68f0a3f5d3b5e",
"assets/assets/arms/rightgoblin.png": "e75d22c198bfa3bf5d992d63a1d3b46d",
"assets/assets/arms/rightgrapple.png": "06e977e60e46dc97321882edbcff34f4",
"assets/assets/arms/rightleaf.png": "71719571925c5f5b9176aec665cd7600",
"assets/assets/arms/rightmagic.png": "40101d480281a57cd3a4e701c01e6179",
"assets/assets/arms/rightpirate.png": "9f7c37171c10eaf97a0e17f442af641e",
"assets/assets/arms/rightrobotclaw.png": "44466ff27af51aa2ffe01067638c107d",
"assets/assets/arms/rightrobotdiamonddrill.png": "4153088eec07afe781735b6b517d8b59",
"assets/assets/arms/rightrobotdrill.png": "2665bc08cc5ab74e8a9449df9a11f3fb",
"assets/assets/arms/rightstars.png": "94982445f883251420c3a444387bf5e3",
"assets/assets/arms/rightstickmin.png": "ee45584d76847cc9c24abb3e6f5f0484",
"assets/assets/arms/righttree.png": "d9659422b12aff103f593bcab43881be",
"assets/assets/arms/rightvine.png": "61d02f80b06adfa45be6f7e78db4d828",
"assets/assets/arms/tankie.png": "f8f43784eb44a25d0332ae2ae21f5d5d",
"assets/assets/backgrounds/placeholder-0.png": "fbee5f29da836d055e3f1d4ab5801f01",
"assets/assets/characters/blackberry.png": "c18f8342f1e34fb21a82715c2ce2db11",
"assets/assets/characters/bot.png": "06acdf6a20ae85c7b216ff7f191a6f62",
"assets/assets/characters/chicken.png": "9f56134abe6c2b18cd47c91d978b5b81",
"assets/assets/characters/cloud.png": "2bdc538ef4153091547b5e0ec9efd191",
"assets/assets/characters/fire.png": "a1e8df1ec4887c14b2436ac81b9ba99a",
"assets/assets/characters/fish.png": "bc90a4349314d87d9ecc9578a57955d3",
"assets/assets/characters/ghost.png": "77432af6692ab798788c55c17e617b5f",
"assets/assets/characters/goat.png": "a6c94c32dcbafe94a11c86106b2b05c0",
"assets/assets/characters/goblin.png": "76174ce44ae7a51d2e86d1a4dc1b568d",
"assets/assets/characters/goldenbot.png": "fde0618a2d407a658596f8f7ae8a5a6c",
"assets/assets/characters/skeleton.png": "8a636f387a81ea748d776741c3bceaa0",
"assets/assets/characters/slime.png": "02217a525d782cf99e2ddc808640ab35",
"assets/assets/characters/star@0.png": "7d21a94ae152dac281a9fb2ce2415422",
"assets/assets/characters/star@1.png": "ca10ddd4ddce75c9c2c079998f1bc3e2",
"assets/assets/characters/star@2.png": "ea94df43f60cc7d6e843f8517241d8c1",
"assets/assets/characters/star@3.png": "764b7f54f14f5bfb80ef7077dcce36a0",
"assets/assets/characters/statue.png": "b0a514272fff6c9e3a046fda7d47fc75",
"assets/assets/characters/tomato.png": "2bd6d6f27dcea1c13b08a972de0594e8",
"assets/assets/characters/tree.png": "62424e41cb339856695e2fe73a8e6dff",
"assets/assets/hats/alien.png": "0a3274911925cd269ff062f07c91afc5",
"assets/assets/hats/aquarium.png": "5da8bc9f3b1af673d46d89c38d52871e",
"assets/assets/hats/cookies.png": "bb66f889fc2cb7c4884ebcbda555759e",
"assets/assets/hats/fedora.png": "86fc9e062b7023bfa4a2d4a62d305bdd",
"assets/assets/hats/flower.png": "95ab770fa33acc66aeff5c736a666f85",
"assets/assets/hats/halo.png": "61a44c2a45e3c5e21a6e728e315a305d",
"assets/assets/hats/onion.png": "a5075518dde77a22eaff6c35dec7e27d",
"assets/assets/hats/pride.png": "4ba60385cd2330ee81419d795895f952",
"assets/assets/hats/slime.png": "70c87b04b6566945a8e0a436f585d11d",
"assets/assets/hats/straw.png": "aae724c5fddddbe3d517953f8ea0311b",
"assets/assets/hats/superhero.png": "7e2cdd00b529b9ceaf1f268b8d1cecec",
"assets/assets/hats/toppat.png": "8dfc88393c11a5e83fe7037fc3757e6a",
"assets/assets/hats/troll.png": "b654c99edc3af9ab1be810696443fbd7",
"assets/assets/hats/volt.png": "91360418903ffc3ba0c18842815ba96c",
"assets/assets/hats/whitefedora.png": "d08151f3316c38dcac3d1a5d24b9aeef",
"assets/assets/objects/cookie.png": "8ee00945883cf496bca4e115ee522d75",
"assets/assets/objects/desk.png": "12006ea655139a3f090c4616d4d6b446",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c3fe471341ad55f75f54e3459b467bea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "980ac92269f9988c47e0eafa47ce2d57",
"/": "980ac92269f9988c47e0eafa47ce2d57",
"main.dart.js": "bd24751543d01d1688e97fab937672a0",
"manifest.json": "e0fa52bdc68674c083cbea7166d3bf98",
"version.json": "b4b3f9ceb01b61546b9d19ad2a9203de"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
