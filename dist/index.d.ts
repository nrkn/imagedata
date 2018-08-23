export declare const createImageData: (width: number, height: number, data?: Uint8ClampedArray | undefined) => ImageData;
export interface ImageData {
    width: number;
    height: number;
    data: Uint8ClampedArray;
}
export declare class ImageData {
    constructor(width: number, height: number);
    constructor(data: Uint8ClampedArray, width: number, height: number);
    width: number;
    height: number;
    data: Uint8ClampedArray;
}
