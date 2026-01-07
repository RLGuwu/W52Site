document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const increment = target / 100; // ajuste a velocidade aqui
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(interval);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 30);
  });
});