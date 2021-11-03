const links = {
    0: 'https://docs.google.com/forms/d/e/1FAIpQLScSTXKbJy425-kSCaylG8n49TpN9bxUECRSwWke9tfQRnHqSA/viewform',
    1: 'https://www.youtube.com/',
    2: 'https://www.google.com/',
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const int = getRandomInt(0, 3)
  
console.log(int)
window.location.href = links[int]