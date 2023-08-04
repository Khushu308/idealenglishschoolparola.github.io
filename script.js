// JavaScript code for the lightbox functionality
function openModal(imageUrl) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageUrl;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  