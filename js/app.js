if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/pwa/service-worker.js')
    .then((reg) => {
      console.log('Service worker registered.', reg);
    }).catch((error) => {
      console.log('Registration failed with ' + error);
    });
  });
}
