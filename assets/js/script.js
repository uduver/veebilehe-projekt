// Kõik javascript siin failis on ise kirjutatud.

// Kõik taustapildid, mida vahetatakse listina.
const listOfBackgrounds = [
    "https://cdn.stocksnap.io/img-thumbs/960w/nature-snow_MYB1PRE1CG.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/black%20&%20white-dog_XMC0W07QF8.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/curious-goat_KA7QABTORY.jpg",
    "https://cdn.stocksnap.io/img-thumbs/960w/nature-animals_OONQCBMXZ9.jpg",
]

let currentBackground = 0;

// Muudab iga 3 sekundi tagant veebilehel taustapilti.
setInterval(() => {
    currentBackground += 1;
    currentBackground %= listOfBackgrounds.length
    document.body.style.backgroundImage = `url(${listOfBackgrounds[currentBackground]})`
}, 3000)


// Selle asemel, et inimene peaks koguaeg erinevat lehte külastama, fetchib ta lehe sisu ettenähtud failist.
// Nii on kasutaja kogemus parem ja see hoiab ära koodi dubleerimist.
function openLeht(leht) {
    fetch(leht).then((content) => {
        return content.text()
    }).then((sisu) => {
        content.innerHTML = sisu
    })
}
