document.querySelector('#enterGallery').addEventListener('click', () => {
    window.location.href = 'gallery.html'; // Rediriger vers la galerie immersive
  });
  
  // Zoom (selon le fichier zoom.txt qui pourrait contenir des instructions)
  const zoomData = fetch('zoom.txt').then(response => response.text());
  zoomData.then(data => {
    // Code pour appliquer les zooms basés sur le contenu de zoom.txt
  });
  
  // Interaction avec les objets 3D
  const interactiveEntities = document.querySelectorAll('.interactive');
  interactiveEntities.forEach(entity => {
    entity.addEventListener('mouseenter', () => {
      // Actions lors de l'interaction, comme l'augmentation de la taille ou jouer un son
      entity.setAttribute('scale', '1.2 1.2 1.2');
    });
    entity.addEventListener('mouseleave', () => {
      entity.setAttribute('scale', '1 1 1');
    });
  });
  