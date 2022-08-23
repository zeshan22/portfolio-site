'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a0581cb08888408a0f0b70e240c899ed",
"assets/assets/code.PNG": "4d1d91aa29895d8c5388240ede5491fd",
"assets/assets/firebase.png": "0e4792f1b38576bce30728eec593a301",
"assets/assets/Flutter.PNG": "bd050914f22a81dcbf6621826f98c15f",
"assets/assets/heart.png": "9f61111962cc66e53f0c907d4fcc17cb",
"assets/assets/icons8-android-os-24.png": "1f8466dc5420152216117b56a7a7b623",
"assets/assets/icons8-apple-logo-50.png": "eb2230cb7b8e0acc3b8eebb1cd561158",
"assets/assets/icons8-cv-50.png": "0f1c9b330b45239d03564d65c1e229d4",
"assets/assets/icons8-dart-48.png": "0a4777b993a114d9b9870727398bcac6",
"assets/assets/icons8-database-50.png": "98f5e32d8ec1e2c40ec870b885719aa9",
"assets/assets/icons8-firebase-48.png": "0e4792f1b38576bce30728eec593a301",
"assets/assets/icons8-flutter-48.png": "646231c7b3e14f0959ac43175dfcf994",
"assets/assets/icons8-java-48.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"assets/assets/icons8-kotlin-48.png": "dc9cac39b59efefc086138586ffff958",
"assets/assets/icons8-swift-48.png": "c1cfefb5f143a24730e1b19cbc7840c0",
"assets/assets/icons8-tools-30.png": "a6124127714ba52bf38ee138df5e6b9a",
"assets/assets/icons8-web-32.png": "329aa35e54de490b273120931c731cc6",
"assets/assets/icons8-youtube-48.png": "de3cc3a83a7c94323e7499237d451ba6",
"assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/ml.PNG": "2045d6e81451adb010f0f79c1e458d53",
"assets/assets/ml2.PNG": "66b3946613b9a8c544c2679747a5292b",
"assets/assets/myImage.jpg": "0cdc234b09a224bec9b90d5ea2757ed3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7a661e5fad57338b80198fdbf5a49f5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82dfb1f620b568f8326d6736e2eca70f",
"/": "3556832ef3b17867a8df0d9d5cb423cd",
"main.dart.js": "2955baf1068c899a6da7f1604f5a0108",
"manifest.json": "c3326e72387cec77910c2d3ddf35a706",
"portfolio-site/.git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
"portfolio-site/.git/config": "198edb55178952f486e22529f61242cc",
"portfolio-site/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"portfolio-site/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"portfolio-site/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"portfolio-site/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"portfolio-site/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"portfolio-site/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"portfolio-site/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"portfolio-site/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"portfolio-site/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"portfolio-site/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"portfolio-site/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"portfolio-site/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"portfolio-site/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"portfolio-site/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"portfolio-site/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"portfolio-site/.git/index": "8a9b3cd3225865ad27d6038b9d845634",
"portfolio-site/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"portfolio-site/.git/logs/HEAD": "c24768be1caab1a38c8698e60ed6df33",
"portfolio-site/.git/logs/refs/heads/main": "bfe2533b4dad2a70cc8417c96d2b8244",
"portfolio-site/.git/logs/refs/remotes/origin/main": "870f3c99ce3a13445f1e4b80dd6c65ea",
"portfolio-site/.git/objects/04/00c4f5d3faa129ea444905b6f70171a8c312fb": "3f283c3a321ec073f7d560e1122f338f",
"portfolio-site/.git/objects/05/6f372cf42e7796785d9d75b38f794632ff48de": "5b8b2c660dfdaafe14e113bd9b3fb935",
"portfolio-site/.git/objects/17/f095171cd1b62842c3353100c36ca51d293e5c": "e18de34831148498cef79827450b5958",
"portfolio-site/.git/objects/1b/658079655346dba49a6369c3bdf95ca04e16c0": "6dabc060a34f2e41a64b99a29d5aa09c",
"portfolio-site/.git/objects/22/286c67509066d3bb7d0447cd82cd1e2aee8a8e": "4a77b3a15a6cd09a300293f11034012b",
"portfolio-site/.git/objects/22/f7721584b0b920d0438d8a76c2ddab39d86aa4": "5032f3530cdaa5b7e56249223720c181",
"portfolio-site/.git/objects/26/b291df3639e5b52ca733cb746d91eb9f3ceb9e": "6a13fb3e31c889eaa972aa81f1425a27",
"portfolio-site/.git/objects/31/2a6ae812b36c12b063b81290ed8523f52fb71e": "8bf9980f3242958e1e8c06deeeea13be",
"portfolio-site/.git/objects/39/c9d5e317e58b8182a58485a6022ec9ee120136": "22c6a05aca86d5a6f655325809e457b1",
"portfolio-site/.git/objects/3e/45642672583fa3f2b8afd42760dc9c4d07c795": "85b840baaf991097d9679ef410f96fb0",
"portfolio-site/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"portfolio-site/.git/objects/4e/4e4935707a596987ec1cc32e3d0d587dbe4f04": "26fba441564ddf4afefb5e8674b9940d",
"portfolio-site/.git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
"portfolio-site/.git/objects/55/730c425b2a80092dccc719fe65865e23a1c97f": "af1dc4bd4b81fe9b33eac120ce4bfe44",
"portfolio-site/.git/objects/57/fbb2c11b7a33862757b1a4c628240fbddc72b7": "ac8a36591f0d2d32df4caf263cbab3bf",
"portfolio-site/.git/objects/5d/733c8afdd740b98fc8879cc9c0d68859d3ab09": "e65e58a3e78b2169489c9ca29f71c77f",
"portfolio-site/.git/objects/5d/8ab6f54d0b0db94ab3ada641e846f0fcadc3b9": "246a1d90becf8e25a78f4ff23f32b4cf",
"portfolio-site/.git/objects/63/0d50b1639d16ae926fa909378296d41a703a59": "45834debc003b09558d6d1fff7037ffa",
"portfolio-site/.git/objects/64/dda74cb6b4b8c4797c227c51fa565c15575e5c": "d18f6d6db8dca4b9f7890ed277296fad",
"portfolio-site/.git/objects/6a/53a56b417957862ebf3545f1d18d7e65639d60": "66280d245ce8cba08acbc2c41841a92f",
"portfolio-site/.git/objects/71/646732fa8d2195ad006367374f5879f119bd71": "e9c4f6d492bb93962ab25488827c8f92",
"portfolio-site/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"portfolio-site/.git/objects/7a/564c1b61bc90274acadb940ee1267ae71c36fc": "20e20c70b9f8f863fd7d1175923a8f9c",
"portfolio-site/.git/objects/7d/751d7ff22f4ce9ca9c539aa1eebf6ab877281a": "4ab6440be14a89b7422e8b3c4e453923",
"portfolio-site/.git/objects/8e/189b769affb13380ecc7197ea40f17521dfc2d": "42c7e42b4f89fde234143983d976d0b2",
"portfolio-site/.git/objects/93/6e7875eb7b11c1277c56198134fe969bc9259f": "71f46608c74ed11c3ece152bd0fafbc4",
"portfolio-site/.git/objects/94/afe9e76015378806f02c10807370c7dadbfe36": "80832c71cd72e1f804cb755b3a1c1c91",
"portfolio-site/.git/objects/96/8de64837ca611ebed5a64d5600e11aca91dc10": "58adbd3daf700c421b91a612e8e4a118",
"portfolio-site/.git/objects/96/cfe282d4d4dd6f6362526844598b5250e27f17": "4a5d8ddbde42017866de28aa46e97872",
"portfolio-site/.git/objects/9e/cfaad5eb06bd448eb900d9cc0716ddec40cd55": "8235ad3fec23b15eeab454090e64b961",
"portfolio-site/.git/objects/a0/00f0d9f89b4464f3c8e9087cf07295bda94264": "897150bcc9502eefd9e03a555d65f50a",
"portfolio-site/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"portfolio-site/.git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
"portfolio-site/.git/objects/aa/5b594ee09f6410e8a26299e45074adf6c29d9d": "cf82505109e0f3b643ad29862d496a6b",
"portfolio-site/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"portfolio-site/.git/objects/b0/c672dc0114a0b32070188ac786ce16292833ff": "056cf6e7051a716b4cafbb217e89e7fe",
"portfolio-site/.git/objects/b1/07a1f3cd0ecfae25fdde6f95707982c6270e5a": "d54f76df9148cce51d20538d629631d0",
"portfolio-site/.git/objects/b2/f4e0e8d466ffa648bfd494c19bc3e3f85c0e74": "0340e767099ca60e549bb7c7bf795529",
"portfolio-site/.git/objects/b5/f2538fbf9de48baa55b37b1ddfe2e06f4ba99e": "4657b8088a1722e733efcd1f73f0172c",
"portfolio-site/.git/objects/b6/27d02e626a10de0862a1e7dd80befb58caccd7": "1a64ef89bc372fccf756c60224920fb1",
"portfolio-site/.git/objects/bb/91038e11b984a4d5a8d649652c8b4a226094d6": "dd1f44eb6f9245444df91246c9e51ae3",
"portfolio-site/.git/objects/c3/27b8d58209be97c26ea4d3d7d6ea3bc4c239f2": "249e88f5d1e5c4eeb5ed1fece6b5008c",
"portfolio-site/.git/objects/c5/be327e18b7afea98ef38a6d13f1ee4860250ea": "cc399e3bf0aadfbfe7687324471d2eb3",
"portfolio-site/.git/objects/c5/d47224911f3cdbf5427a4b6f4ceb6b12343284": "a404d0f2b93bf69e52a2f38e26515373",
"portfolio-site/.git/objects/c6/a8ad5aa68844016cddacf17717191a3ac58cf8": "de3a26aa8e7cfd619be33c44a9abef65",
"portfolio-site/.git/objects/c7/ec8ddb636210bff1203145e71950c734232b51": "23fb641ee5094a362096b0771991c6cf",
"portfolio-site/.git/objects/c9/2c4a10d5e990759ff2c399cd160a25a4d4b494": "f53d6aa666f754624f1b2ab89e9d3437",
"portfolio-site/.git/objects/cc/2f670c5c88d383879716b762e4c86873b3aa5c": "827ddab085b76580267434b0d014c512",
"portfolio-site/.git/objects/cc/9b1a0f760519eb4ef31fc12428049841b5e9f8": "dd3d09bdf705bce0106e3d26f65f661d",
"portfolio-site/.git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
"portfolio-site/.git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
"portfolio-site/.git/objects/e0/80c37f413ad9674da2d2ef23d7560e2cd47e9f": "34a4b87241e6699cad6bed2bff269364",
"portfolio-site/.git/objects/e3/1bef880ea5957d3fd111205d2d906b1c11e0ac": "864e20eea6bbf398e55b02a363831ebd",
"portfolio-site/.git/objects/e4/59771c7eae05e73979282aa87a891be4d7ca1b": "30d64837bee72c3b9420401176e3e635",
"portfolio-site/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"portfolio-site/.git/objects/e9/d2c402d4939c377a106451d2f9f6aa17ce7ab0": "53160efedfdbd8fb5a87691626fefb89",
"portfolio-site/.git/objects/ee/5a7deddf8a7f0a0c213bcbb6f46fe81ed43f0f": "48d2dd60ec5dd4a3ce1dad59605f0365",
"portfolio-site/.git/objects/f0/c8be039651bb36448e21daf080b92492e5471c": "64c9e1876973d68b94303d7074074fc0",
"portfolio-site/.git/objects/f7/a6fe9cae344960dd0818910b6498715b891839": "01a51b7ef294abc6c2851f3029d515d3",
"portfolio-site/.git/objects/fa/d0a1a166f5bbf36df42976213b91d36fbc40d1": "e74dec3bcf0d617684b08f916e898158",
"portfolio-site/.git/refs/heads/main": "8ce1ee772554a7d326c28293259f2af7",
"portfolio-site/.git/refs/remotes/origin/main": "8ce1ee772554a7d326c28293259f2af7",
"portfolio-site/assets/AssetManifest.json": "a0581cb08888408a0f0b70e240c899ed",
"portfolio-site/assets/assets/code.PNG": "4d1d91aa29895d8c5388240ede5491fd",
"portfolio-site/assets/assets/firebase.png": "0e4792f1b38576bce30728eec593a301",
"portfolio-site/assets/assets/Flutter.PNG": "bd050914f22a81dcbf6621826f98c15f",
"portfolio-site/assets/assets/heart.png": "9f61111962cc66e53f0c907d4fcc17cb",
"portfolio-site/assets/assets/icons8-android-os-24.png": "1f8466dc5420152216117b56a7a7b623",
"portfolio-site/assets/assets/icons8-apple-logo-50.png": "eb2230cb7b8e0acc3b8eebb1cd561158",
"portfolio-site/assets/assets/icons8-cv-50.png": "0f1c9b330b45239d03564d65c1e229d4",
"portfolio-site/assets/assets/icons8-dart-48.png": "0a4777b993a114d9b9870727398bcac6",
"portfolio-site/assets/assets/icons8-database-50.png": "98f5e32d8ec1e2c40ec870b885719aa9",
"portfolio-site/assets/assets/icons8-firebase-48.png": "0e4792f1b38576bce30728eec593a301",
"portfolio-site/assets/assets/icons8-flutter-48.png": "646231c7b3e14f0959ac43175dfcf994",
"portfolio-site/assets/assets/icons8-java-48.png": "0414fcd53fdb6903fb57134fdd8a9af2",
"portfolio-site/assets/assets/icons8-kotlin-48.png": "dc9cac39b59efefc086138586ffff958",
"portfolio-site/assets/assets/icons8-swift-48.png": "c1cfefb5f143a24730e1b19cbc7840c0",
"portfolio-site/assets/assets/icons8-tools-30.png": "a6124127714ba52bf38ee138df5e6b9a",
"portfolio-site/assets/assets/icons8-web-32.png": "329aa35e54de490b273120931c731cc6",
"portfolio-site/assets/assets/icons8-youtube-48.png": "de3cc3a83a7c94323e7499237d451ba6",
"portfolio-site/assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"portfolio-site/assets/assets/ml.PNG": "2045d6e81451adb010f0f79c1e458d53",
"portfolio-site/assets/assets/ml2.PNG": "66b3946613b9a8c544c2679747a5292b",
"portfolio-site/assets/assets/myImage.jpg": "0cdc234b09a224bec9b90d5ea2757ed3",
"portfolio-site/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"portfolio-site/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"portfolio-site/assets/NOTICES": "7a661e5fad57338b80198fdbf5a49f5b",
"portfolio-site/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"portfolio-site/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"portfolio-site/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"portfolio-site/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"portfolio-site/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"portfolio-site/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"portfolio-site/flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"portfolio-site/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"portfolio-site/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"portfolio-site/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"portfolio-site/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"portfolio-site/index.html": "3556832ef3b17867a8df0d9d5cb423cd",
"portfolio-site/main.dart.js": "6de208e3d9fcd1924de5e66da599974a",
"portfolio-site/manifest.json": "c3326e72387cec77910c2d3ddf35a706",
"portfolio-site/version.json": "d417b57c3029353ffdb24b1ee7a2c29b",
"version.json": "d417b57c3029353ffdb24b1ee7a2c29b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
