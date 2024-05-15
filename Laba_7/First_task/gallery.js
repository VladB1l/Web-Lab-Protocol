const images = [];
for (let i = 0; i < 6; i++) {
    let newObject = {};
    newObject.preview = `./img/picture${i + 1}.jpg`;
    newObject.original = `./img/picture${i + 1}.jpg`;
    newObject.description = `picture${i + 1}`;
    images.push(newObject);
}

let gallery = document.querySelector('.gallery');

for (let i = 0; i < images.length; i++) {
    let newElement = document.createElement('li');
    newElement.innerHTML = `<img src='${images[i].preview}' alt='${images[i].description}'>`;
    newElement.onclick = () => {
        basicLightbox.create(`
            <img width="1400" height="900" src="${images[i].original}">
        `).show();
    };
    gallery.append(newElement);
}

gallery.onclick = function (event) {
    let target = event.target
    target.tagName === 'IMG' &&  console.log(`Посилання на велике зображення ${target.src} `)

}
