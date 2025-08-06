// This is a placeholder service worker file.
// The Vite PWA plugin will replace this with an actual service worker during build.
// This file is used only for development purposes.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});
