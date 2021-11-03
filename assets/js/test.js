const links = {
    0: 'https://docs.google.com/forms/d/e/1FAIpQLScSTXKbJy425-kSCaylG8n49TpN9bxUECRSwWke9tfQRnHqSA/viewform',
    1: 'https://docs.google.com/forms/d/e/1FAIpQLScPR4yOxnYtk9pxA9nA0IQdYxqHgAcCoS1O6gT536eOA1rytw/viewform',
    2: 'https://docs.google.com/forms/d/e/1FAIpQLSeldvsdfAZU1BViLBR1su7_uk_0nuOCDJuJfHd4R4RYCAuHZA/viewform',
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const int = getRandomInt(0, 3)
  
console.log(int)
window.location.href = links[int]