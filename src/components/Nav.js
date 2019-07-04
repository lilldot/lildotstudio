// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {
  var $nav = document.getElementById('mobile-nav');


  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the "main-nav" element

        // Toggle the class on "main-nav"
        $nav.classList.toggle('hidden');
        var $closeButton = document.getElementById('close-button');

        // Toggle the class on "main-nav"
        $closeButton.classList.toggle('hidden');
        var $burgerButton = document.getElementById('burger-button');

        // Toggle the class on "main-nav"
        $burgerButton.classList.toggle('hidden');
      });
    });
  }

});
