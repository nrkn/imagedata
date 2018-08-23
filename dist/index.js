"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImageData = (width, height, data) => {
    if (width === undefined || height === undefined) {
        throw TypeError('Not enough arguments');
    }
    width = Math.floor(width);
    height = Math.floor(height);
    if (isNaN(width) || width < 1 || isNaN(height) || height < 1) {
        throw TypeError('Index or size is negative or greater than the allowed amount');
    }
    const length = width * height * 4;
    if (data === undefined) {
        data = new Uint8ClampedArray(length);
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const i = y * width + x;
                data[i * 4 + 3] = 255;
            }
        }
    }
    if (data instanceof Uint8ClampedArray) {
        if (data.length !== length) {
            throw TypeError('Index or size is negative or greater than the allowed amount');
        }
        return { width, height, data };
    }
    throw TypeError('Expected data to be Uint8ClampedArray or undefined');
};
class ImageData {
    constructor(arg1, arg2, arg3) {
        let imageData;
        if (arg1 instanceof Uint8ClampedArray && arg3 !== undefined) {
            imageData = exports.createImageData(arg2, arg3, arg1);
        }
        else if (!(arg1 instanceof Uint8ClampedArray) && arg1 !== undefined && arg2 !== undefined) {
            imageData = exports.createImageData(arg1, arg2);
        }
        else {
            throw TypeError('Unexpected arguments at new ImageData');
        }
        this.width = imageData.width;
        this.height = imageData.height;
        this.data = imageData.data;
    }
}
exports.ImageData = ImageData;
//# sourceMappingURL=index.js.map