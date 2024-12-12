const selectElement = document.getElementById('picture_select');
const img = document.getElementById('display_image')
selectElement.addEventListener('change', function() {
    const selectedOption = this.options
    const imagePath = this.selectedOption;
    console.log(imagePath)
   console.log(selectedOption)
if (imagePath) {
    img.src = `images/${imagePath}.jpg`;
}
}); 