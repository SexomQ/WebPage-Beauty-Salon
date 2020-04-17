function myFunction() {
  document.getElementById("drop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.burger__menu')) 
  {
    var dropdowns = document.getElementsByClassName(".menu__drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
	{
      var openMenu__drop = dropdowns[i];
      if (openMenu__drop.classList.contains('show')) 
	  {
        openMenu__drop.classList.remove('show');
      }
    }
  }
}