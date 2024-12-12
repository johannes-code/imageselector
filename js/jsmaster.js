const selectElement = document.getElementById('picture_select');

function display_image(){
const img = document.getElementById('display_image')


selectElement.addEventListener('change', function () {
    img.src = selectElement.value;
});
}


function createOptions(){
    images.map((option)=> {
        const createOption = document.createElement("option");
        createOption.textContent = option.id
        createOption.value = option.imgUrl
        selectElement.appendChild(createOption)
    })
}



const images =  [
    {
        imgUrl: './pictures/bartek-garbowicz-xJeCLqsBUqc-unsplash.jpg',
        id:'nightsky'
    },
    {
        imgUrl: './pictures/boliviainteligente-8xFoR-jG8iM-unsplash.jpg',
        id:'purple_planet',
    },
    {
        imgUrl: './pictures/boliviainteligente-exDrlepnHcQ-unsplash.jpg',
        id:'intelligent',
    },
    {
        imgUrl: './pictures/brett-ritchie-1vKTnwLMdqs-unsplash.jpg',
        id:'galaxy',
    },
    {
        imgUrl: './pictures/jasper-garratt-_qs0C7OoA6o-unsplash.jpg',
        id:'night_tree',
    },
    {
        imgUrl: './pictures/luke-stackpoole-5Qqkjn4PFPA-unsplash.jpg',
        id:'aurora',
    },
    {
        imgUrl: './pictures/mark-mc-neill-sGLdzR3guyQ-unsplash.jpg',
        id:'grey',
    },
    {
        imgUrl: './pictures/oliver-hihn-o7M7HbxxPVY-unsplash.jpg',
        id:'night',
    }
]

display_image();
createOptions();