window.onload = function() {
  var images = document.getElementsByTagName('img');
    var links = document.getElementsByTagName('a');
  for (var i = 0; i < images.length; i++) {
      images[i].onclick = function() {
          AndroidInterface.onImageClick();
      };
  }

    
  for (var i = 0; i < links.length; i++) {
      links[i].onclick = function() {
          AndroidInterface.onLinkClick();
      };
  }
};


AndroidInterface.cargarAnuncioNativo();