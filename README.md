# imagedata

Pure Javascript implementation of [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData)

`npm install imagedata`

```javascript
const { ImageData } = require( 'imagedata' )

const id1 = new ImageData( 50, 50 )

const arr = new Uint8ClampedArray( 50 * 50 * 4 )

const id2 = new ImageData( arr, 50, 50 )
```
