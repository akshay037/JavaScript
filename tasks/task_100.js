// JavaScript Program to Get the Dimensions of an Image

const img = new Image();

// get the image
img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// get height and width
img.onload = function () {
    console.log('width ' + this.width)
    console.log('height ' + this.height);
}