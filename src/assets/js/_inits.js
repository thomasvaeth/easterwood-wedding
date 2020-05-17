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
      threshold: 0,
    };

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
