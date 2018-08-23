# rgba-image

Pure Javascript implementation of [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData)

`npm install rgba-image`

```javascript
const { createImage, ImageData } = require( 'rgba-image' )

const arr = new Uint8ClampedArray( 50 * 50 * 4 )

// functional form - optional argument is always last!
const id1 = createImage( 50, 50 )
const id2 = createImage( 50, 50, arr )

// class form - matches WHATWG specification
const id3 = new ImageData( 50, 50 )
const id4 = new ImageData( arr, 50, 50 )
```
