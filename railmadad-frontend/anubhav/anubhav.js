const stars = document.querySelectorAll('.star-rating .star');
  let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => highlight(index));
    star.addEventListener('mouseout', () => highlight(selectedRating - 1));
    star.addEventListener('click', () => {
      selectedRating = index + 1;
      highlight(index);
      stars.forEach((s, i) => {
        s.setAttribute('aria-checked', i === index);
      });
    });
  });

  function highlight(index) {
    stars.forEach((star, i) => {
      star.classList.toggle('hovered', i <= index);
    });
  }