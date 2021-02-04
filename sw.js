const staticCacheName = 'site-static-v1';
const assets = [
    '/',
    'index.html',
    'images/gym-page.PNG',
    'images/fatburner-1.PNG',
    'images/fatburner-2.PNG',
    'images/fatburner-3.PNG',
    'images/fatburner-4.PNG',
    'images/fatburner-logo.PNG',
    'images/fatburner-logo2.PNG',
    'images/preworkout-1.PNG',
    'images/preworkout-2.PNG',
    'images/preworkout-3.PNG',
    'images/preworkout-4.PNG',
    'images/preworkout-logo.PNG',
    'images/protein-1.PNG',
    'images/protein-2.PNG',
    'images/protein-3.PNG',
    'images/protein-4.PNG',
    'images/protein-5.PNG',
    'images/protein-frontpage.png',
    'images/protein-logo.PNG',
    'images/protein-logo2.PNG',
    'images/supplement-frontpage.jpg',
    'images/logo/rocketLogo.PNG',
    'style.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Audiowide',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'manifest.json',
    'app.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',
    'scripts.js'
 
];
// install event
self.addEventListener('install', evt => {
    //console.log('service worker installed');
    evt.waitUntil(
      caches.open(staticCacheName).then((cache) => {
        console.log('caching shell assets');
        return cache.addAll(assets);
      })
     
    );
  });
  
  // activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
    evt.waitUntil(
      caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
          .filter(key => key !== staticCacheName)
          .map(key => caches.delete(key))
        );
      })
    );

  });
  
  // fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
      })
   );
  });