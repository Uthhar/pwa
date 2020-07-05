if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    let scope = '/pwa/';

    navigator.serviceWorker.register(scope + 'service-worker.js')
    .then((reg) => {
      console.log('Service worker registered.', reg);
    }).catch((error) => {
      console.log('Registration failed with ' + error);
    });
  });
}
