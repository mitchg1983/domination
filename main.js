function lineFirst() {

    const firstLi = document.querySelector('li');
    firstLi.style.textDecoration = 'line-through';
    console.log('this is the li', firstLi);

}

lineFirst();

function changeImage(id, url) {

    document.querySelector(id).src = url;

}

changeImage('#image-1', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Massachusetts_State_House_Red_Sox_Banner.JPG');

changeImage('#image-2', 'https://upload.wikimedia.org/wikipedia/commons/1/10/Roger_Clemens_1996.jpg');

changeImage('#image-3', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Ortizpoint.jpg');

function removeLineFirst() {

    const removeThis = document.querySelector('#arguments li');
    removeThis.remove();

}

removeLineFirst();
removeLineFirst();

function changeFontSize (newSize, id) {

    const target = document.querySelector(id);
    target.style.fontSize = newSize;

}

changeFontSize('48px', '#lorem');



function domAppend (element) {

        const arguments = document.querySelector('#arguments');
        arguments.append(element);


}

const imageElement = document.createElement('img');

imageElement.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg';

domAppend(imageElement);

function changeImgSize (img) {

    img.style.height = '30px';

}

changeImgSize(imageElement);

function makeInvisible (element) {

    element.className = 'invisible';

}


const imgarea = document.querySelector('h1');

makeInvisible(imgarea);


function newListItem (text) {

    const outputLi = document.createElement('li');

    outputLi.innerText = text;

    return outputLi

}

const partTwo = newListItem('This is part two of the exercise.');

domAppend(partTwo);

function makeHeader (headSize, string) {

    const newHeader = document.createElement('h' + headSize);

    newHeader.innerText = string;

    return newHeader;

}

const partFour = makeHeader(1, 'Let us see if this will work.');

domAppend(partFour);