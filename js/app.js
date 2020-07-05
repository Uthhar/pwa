if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
    .then((reg) => {
      console.log('Service worker registered.', reg);
    }).catch((error) => {
      console.log('Registration failed with ' + error);
    });
  });
}