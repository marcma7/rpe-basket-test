// Registrar service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registrat correctament'))
    .catch(err => console.log('Error registrant Service Worker:', err));
}
