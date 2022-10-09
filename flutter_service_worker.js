'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "66e37b96bcd148bb1394ffbddee00153",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/AssetManifest.json": "baefb8e605db8c8d670d569d1d3a4b99",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/icons/ICO%2520Prototype.svg": "6552428b404b76a3da2a4cd2b98caa7a",
"assets/assets/icons/ICO%2520Home.png": "e32bdbc23cf7854893765eb421e9ef0f",
"assets/assets/icons/ICO%2520Define%2520Goal.svg": "4cd5a97d1dce0952eb7755a6f4fdb0f4",
"assets/assets/icons/ICO-Home.svg": "ca124683074809675bcdb95daec39c26",
"assets/assets/icons/ICO%2520Ideation.svg": "decfcc7e0dd0cf8c488a4b413c25fadd",
"assets/assets/icons/ICO%2520User%2520Testing.svg": "0d9c951ec6782876e4880e7c992901d3",
"assets/assets/icons/ICO%2520Learn.png": "392b07ef89a59262dfe1405a1125edd5",
"assets/assets/icons/ICO%2520Edit%2520Profile%2520Icon.svg": "777a62658e4490604b3b03ead5558bd5",
"assets/assets/icons/ICO%2520Back.svg": "cead9a2f3f9a264a263e2bdab939e7cc",
"assets/assets/icons/ICO%2520Reitration.svg": "5dc40ae3193b7a37cbdd3cb4b6d607d6",
"assets/assets/icons/Rectangle%25201818.svg": "cf8339c24ffe576f1d1a48023a1410a5",
"assets/assets/icons/ICO%2520Google.svg": "3a44b93540c1a65f49720638c70b5c29",
"assets/assets/icons/videoBackG.svg": "f72c71dc4b364da559c1c24f971b67b5",
"assets/assets/icons/ICO%2520Empathize.svg": "0db305efca2075a1ccf4c82452a82d0e",
"assets/assets/icons/ICO%2520Profile.svg": "604b28f70d2e4d1798771860599c92d2",
"assets/assets/icons/Monitor.svg": "1108e68b82759f5289abca6d5b6e9b3d",
"assets/assets/svg/circle2_2.svg": "20cf8470e7b867de60f9865d08a5bfc2",
"assets/assets/svg/circle1.svg": "119fd3dbe47b60a73c79b062ed04debd",
"assets/assets/svg/purplerectangle.svg": "6eb93bf712f2912b931ca8a9bd7a238e",
"assets/assets/svg/nonpurplerectangle.svg": "d8d4757ff8dc4c944c63037aae1d4a8e",
"assets/assets/svg/cicle2_1.svg": "eee78c6833a7230b4a06cb6bad8ca722",
"assets/assets/splash/slide3_2.svg": "9b4b5d4cca1ae083a618dc0eb88ee089",
"assets/assets/splash/slide2_1.svg": "fc09dc3834f99cff010a7408e4ab98d1",
"assets/assets/splash/slide1_2.svg": "c1607d6cfbdf18c7cac62b8c6f44303d",
"assets/assets/splash/slide3_1.svg": "9795c452da4207ec1cf8f8f3d80222ec",
"assets/assets/splash/slide2_2.svg": "4fef0d9e85596f3fe3b5f196260c716b",
"assets/assets/splash/slide1_1.svg": "9795c452da4207ec1cf8f8f3d80222ec",
"assets/assets/banners/2ndblog.png": "88b928058cd322c74e667ecc1ac63ffd",
"assets/assets/banners/BANNER-Home-Screen-Story.svg": "6388530c4f2d3b8c04b94419c1fc541a",
"assets/assets/banners/BANNER-Home-Screen-Steps.svg": "094a3e84fdc46f5e35731a7bf3091f4d",
"assets/assets/banners/BANNER-Home-Screen-Stepss.svg": "6743a753986fc6bccab667649a9b55f1",
"assets/assets/banners/3rdblog.png": "7345f07b2224d3912849c08f4bc0df6c",
"assets/assets/banners/1stblog.png": "219fa4827ca38590956da334f987c2d1",
"assets/assets/banners/BANNER-Home-Screen.svg": "da49843226522b39ad8769cbc8fbf9ed",
"assets/assets/backgrounds/BG%2520Profile%2520Pic.png": "32b069f39c1e5458340a1bd432a04eec",
"assets/assets/logos/LOGO-Dezy-It-V2.svg": "393a1e60cc291af6dd48977050b32693",
"assets/assets/buttons/BTN%2520Replay.svg": "2326baf21301b26cd9e2dea07bb2a329",
"assets/assets/buttons/singupButton.svg": "abb269335ae1f9967f227038701660f8",
"assets/assets/buttons/saveButton.svg": "13e96ca2b83ecad7462d07a81683f2db",
"assets/assets/buttons/NextButton.svg": "d0e4ae868b401ea5d35aaf11a784dc0d",
"assets/assets/buttons/LoginButton.svg": "0aa56d44ca99aa5b644cabb13193212d",
"assets/assets/buttons/BTN%2520Create%2520Sprint.svg": "2797deff0dacacf005562f4b36835d9f",
"assets/assets/buttons/BTN%2520Start%2520Learning.svg": "c2101ecc2c6f8e04ba76129f1652c95f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "0d0f951c66a1b2338d19003f85555792",
"assets/NOTICES": "d9541d9cb832548cad3e1a7311cc1ff6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"manifest.json": "b3a9d9c851ed8c12008d37859288189e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"index.html": "9ddbdf6a751b7f6dbee8392b108bc6fb",
"/": "9ddbdf6a751b7f6dbee8392b108bc6fb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "40980b66cc1dd62d33618cda833d2661"
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
