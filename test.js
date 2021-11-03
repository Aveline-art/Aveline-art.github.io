const links = {
    '0': 'https://docs.google.com/forms/d/e/1FAIpQLScSTXKbJy425-kSCaylG8n49TpN9bxUECRSwWke9tfQRnHqSA/viewform',
    '1': '',
    '2': '',
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(0, 3))
  

// window.location = 'https://www.google.com/'