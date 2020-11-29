const listOfBackgrounds = [
    "https://cdn.stocksnap.io/img-thumbs/960w/nature-snow_MYB1PRE1CG.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/black%20&%20white-dog_XMC0W07QF8.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/curious-goat_KA7QABTORY.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/nature-animals_OONQCBMXZ9.jpg",
]

let currentBackground = 0;

setInterval(() => {
    currentBackground += 1;
    currentBackground %= listOfBackgrounds.length
    document.body.style.backgroundImage = `url(${listOfBackgrounds[currentBackground]})`
}, 3000)