export declare const createImageData: (width: number, height: number, data?: Uint8ClampedArray | undefined) => RGBAImage;
export interface RGBAImage {
    width: number;
    height: number;
    data: Uint8ClampedArray;
}
export declare class ImageData implements RGBAImage {
    constructor(width: number, height: number);
    constructor(data: Uint8ClampedArray, width: number, height: number);
    readonly width: number;
    readonly height: number;
    readonly data: Uint8ClampedArray;
}
