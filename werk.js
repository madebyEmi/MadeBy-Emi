

document.addEventListener('DOMContentLoaded', function() {
  const categoryDropdown = document.querySelector('.category-dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  // Open en sluit de dropdown bij klikken
  dropdownToggle.addEventListener('click', function() {
      categoryDropdown.classList.toggle('active');
  });

  // Scroll naar de sectie wanneer een item wordt aangeklikt
  dropdownItems.forEach(item => {
      item.addEventListener('click', function(event) {
          const targetId = item.getAttribute('href').substring(1);  // Haal het ID van de sectie op
          const targetElement = document.getElementById(targetId);

          // Scroll naar de sectie
          targetElement.scrollIntoView({ behavior: 'smooth' });

          // Sluit de dropdown na klikken
          categoryDropdown.classList.remove('active');
      });
  });
});
