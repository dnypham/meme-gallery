var gallery = document.querySelector('main');
var imageUrls = [];
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('form');

addImageButton.addEventListener('submit', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
  event.preventDefault();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.setAttribute('class', 'gallery-image');
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
