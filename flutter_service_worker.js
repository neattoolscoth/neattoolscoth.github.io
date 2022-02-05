'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "35a2273e70e8ec566eaf7f6d1c0e695e",
"favicon.ico": "d80f8e834ab96ea8b0237cc4d559df24",
"index.html": "49cd91f141c04fed5870dd62d2a7af24",
"/": "49cd91f141c04fed5870dd62d2a7af24",
"styles.css": "3bcb2ce7b2f079b344ab1b0230e13321",
"main.dart.js": "e7f6cfadda5599f14c72a93066b18df9",
"img/Neat-Tools-Banner-2.png": "326df15f80cd7f7057edd44a9828e0d7",
"favicon.png": "a16d6f835695c0aadaa9b4f95b7a2e6f",
"icons/Icon-192.png": "c913da70ec823fb227e3b5de0a7d8bd3",
"icons/Icon-512.png": "1d4cc47e10454a57a5cba27fff2775c7",
"manifest.json": "be88add395b03c0ddaaf20cc298e3537",
"assets/AssetManifest.json": "d70b45d8b07b5c7357c65b640a83affb",
"assets/NOTICES": "b420d6e7bb43ad76c58956d26994d645",
"assets/FontManifest.json": "356e55f52f47ea449011fefc48a540b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/cnc-cincom.jpg": "35aaef10c989e806330e7526a85c328d",
"assets/assets/images/machine_logo_5.png": "474ab8bf9d74d512151a71ef880c321d",
"assets/assets/images/machine_logo_25.png": "8c4b3199ad230803bbf08da3a6b78500",
"assets/assets/images/machine_logo_19.png": "585cc0d1086acf1e7c124f26e825a6db",
"assets/assets/images/machine_logo_18.png": "7b5c1c10efb508e23e8bc9027e9c9375",
"assets/assets/images/machine_logo_24.png": "31596c4c759a68340922230c0851a909",
"assets/assets/images/machine_logo_4.png": "100a2643d509916759f3ca69fdafd5c7",
"assets/assets/images/machine_logo_6.png": "8d40a3849e70a66aafdf95946500b40f",
"assets/assets/images/machine_logo_7.png": "a8132c744b3323ad5a68121e30f1798f",
"assets/assets/images/machine_logo_3.png": "035081512158bf11a322411d60a70e5f",
"assets/assets/images/machine_logo_23.png": "0e8d02cdc7b4b9579deb72801aa208a7",
"assets/assets/images/machine_logo_22.png": "11f945a83cb8f86f4c6df341e5ab6527",
"assets/assets/images/machine_logo_2.png": "96c54b32c35e0b5b7e4913e7887790d6",
"assets/assets/images/machine_logo_20.png": "10752424f5628e7c25920ec1e8480ac1",
"assets/assets/images/machine_logo_21.png": "1ae8b1ad9b5bbb807b4205baa36e0b36",
"assets/assets/images/machine_logo_1.png": "dff4e9ad72883a5f27d134f43578b279",
"assets/assets/images/neattools_product_8.jpg": "107da48c802434bad17729430bf20d03",
"assets/assets/images/dark-stone-surface.jpg": "78c0f92b78d17c38fd6c1574792f66cd",
"assets/assets/images/neattools_product_9.jpg": "053bd525957aa09c7dbeaad805325b86",
"assets/assets/images/neattools_product_2.jpg": "ef2b673be36d3c6a853a5eebc4ff693b",
"assets/assets/images/neattools_product_3.jpg": "085f7cdc6003d366652e5c7a661e5f20",
"assets/assets/images/neattools_product_1.jpg": "3b6efafb60b7fc0d53180ee9a688742e",
"assets/assets/images/neattools_product_4.jpg": "085f7cdc6003d366652e5c7a661e5f20",
"assets/assets/images/neattools_product_5.jpg": "6af72bd8a6de48c938681baa6176dce9",
"assets/assets/images/neattools_product_7.jpg": "76c79c23e73c623fd1bd02f90d6fa53d",
"assets/assets/images/neattools_product_6.jpg": "b5a8e526c790b19e645aebd29a598daf",
"assets/assets/images/machine_logo_10.png": "6866bea965cf54fa5340e5d6b2cc3bcc",
"assets/assets/images/machine_logo_11.png": "db44333e13c3f6813bb916522765a934",
"assets/assets/images/machine_logo_13.png": "5cdcd451188586757094f8fa1551d12a",
"assets/assets/images/machine_logo_12.png": "4b8f001f985ce93ee70bccff0e892efa",
"assets/assets/images/machine_logo_16.png": "e8b141d9ddd4feef743516043a0c66b5",
"assets/assets/images/machine_logo_17.png": "537c239d35f161336c9c99e987d8c6fc",
"assets/assets/images/machine_logo_9.png": "efd06daa4da652cb610acf55858f1a05",
"assets/assets/images/machine_logo_15.png": "4dec0818888fc2f43b33ed4c6a4406f9",
"assets/assets/images/machine_logo_14.png": "a076959286339ef8224c5ce8be1de91f",
"assets/assets/images/neattools_product_10.jpg": "117029b129778d658c97128d7b7fdcad",
"assets/assets/images/machine_logo_8.png": "9a759b7bb557feb8a706aa3abecdc2d8",
"assets/assets/fonts/ShineoutIcon.ttf": "71633c17cb179382aaa9bbcb44e8692e",
"favicon.svg": "d0600998b8db874bb6ad5f371e64fb02",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
