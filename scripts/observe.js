(function () {
    var square = document.querySelector('.block_3');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('.animate__animated animate__fadeInRight');
        }
      });
    });
  
    observer.observe(square);
  })();