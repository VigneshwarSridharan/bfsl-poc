// install event
self.addEventListener('install', evt => {
    console.log('service worker installed');
});

// activate event
self.addEventListener('activate',evt => {
    console.log('service worker activated')
})

self.addEventListener('fetch',evt => {
    console.log('service worker fetch', evt.request.url)

})