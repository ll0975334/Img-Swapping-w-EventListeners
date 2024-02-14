var largeImageContainer = document.getElementById("largeImageContainer");
var thumbnail1 = document.getElementById("thumbnail1");
var thumbnail2 = document.getElementById("thumbnail2");
var thumbnail3 = document.getElementById("thumbnail3");

thumbnail1.addEventListener("click", handleFirstThumbnail);
thumbnail2.addEventListener("click", function() {
    updateLargeImage(thumbnail2);
});
thumbnail3.addEventListener("click", function() {
    updateLargeImage(thumbnail3);
});

function handleFirstThumbnail() {
    updateLargeImage(thumbnail1);
}

function updateLargeImage(thumbnail) {
    largeImageContainer.className = thumbnail.getAttribute("data-class");
    
    var newImage = document.createElement("img");
    newImage.src = thumbnail.src;
    newImage.alt = thumbnail.alt;

    largeImageContainer.innerHTML = '';

    largeImageContainer.appendChild(newImage);
}
