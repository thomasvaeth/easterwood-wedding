// ----------------------------------------------
// Imports
// ----------------------------------------------

// ----------------------------------------------
// Inits
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const observables = document.querySelectorAll('img');

  if ('IntersectionObserver' in window) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          entry.target.classList.add('fade-in');
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersect, options);

    observables.forEach(observable => {
      observer.observe(observable);
    });
  } else {
    observables.forEach(observable => {
      observable.classList.add('fade-in');
    });
  }
});
