// Optional: Close the dropdown when clicking outside of it
window.addEventListener('click', function(event) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (!event.target.matches('.dropdown-btn')) {
        dropdown.style.display = 'none';
      }
    }
  });
  