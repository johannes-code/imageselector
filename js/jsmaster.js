function display_image(){
const selectElement = document.getElementById('picture_select');
const img = document.getElementById('display_image')

selectElement.addEventListener('change', function () {
    img.src = selectElement.value;
});
}

display_image();





