
const slider = {
    currentImage: 1,

    init: function () {
        slider.setImage();
        const imageBox = document.querySelector('#images');
        imageBox.addEventListener('click', slider.handleClick);
    },

    setImage: function(){
        const imageBox = document.querySelector('#images');
        const image = document.createElement("img");
        image.src = `assets/images/duck-${slider.currentImage}.jpg`;
        image.className = "images"
        imageBox.appendChild(image);
    },

    handleClick: function(){
        coinAudio = new Audio('assets/audio/coin.mp3');
        coinAudio.play();
        slider.currentImage = Math.floor(Math.random() * (18 - 1 + 1) ) + 1;
        const lastImage = document.querySelector(".images")
        lastImage.remove();
        slider.setImage();
    },
}
