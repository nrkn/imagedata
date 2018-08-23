const assert = require( 'assert' )
const { createImageData, ImageData } = require( '../dist' )

describe( 'createImageData', () => {
  it( 'accepts valid width and height', () => {
    assert.doesNotThrow( () => createImageData( 5, 5 ) )
  })

  it( 'black rectangle if no data', () => {
    const { width, height, data } = createImageData( 5, 5 )

    for( let y = 0; y < height; y++ ){
      for( let x = 0; x < width; x++ ){
        const i = y * width + x
        const j = i * 4
        const r = data[ j ]
        const g = data[ j + 1 ]
        const b = data[ j + 2 ]
        const a = data[ j + 3 ]

        assert.strictEqual( r, 0 )
        assert.strictEqual( g, 0 )
        assert.strictEqual( b, 0 )
        assert.strictEqual( a, 255 )
      }
    }
  })

  it( 'accepts valid width, height and data', () => {
    const data = new Uint8ClampedArray( 5 * 5 * 4 )
    assert.doesNotThrow( () => createImageData( 5, 5, data ) )
  })

  it( 'not enough arguments', () => {
    assert.throws( () => createImageData() )
    assert.throws( () => createImageData( 5 ) )
  })

  it( 'bad arguments', () => {
    assert.throws( () => createImageData( 'foo', 'bar' ) )
    assert.throws( () => createImageData( 5, 0 ) )
    assert.throws( () => createImageData( 5, -1 ) )
    assert.throws( () => createImageData( 0, 5 ) )
    assert.throws( () => createImageData( -1, 5 ) )
    assert.throws( () => createImageData( 2, 2, [] ) )
    assert.throws( () => createImageData( 5, 5, new Uint8ClampedArray( 25 ) ) )
    assert.throws( () => createImageData( 5, 5, new Uint8ClampedArray( 101 ) ) )
  })
})

describe( 'ImageData', () => {
  it( 'accepts valid width and height', () => {
    assert.doesNotThrow( () => new ImageData( 5, 5 ) )
  })

  it( 'accepts valid width, height and data', () => {
    const data = new Uint8ClampedArray( 5 * 5 * 4 )
    assert.doesNotThrow( () => new ImageData( data, 5, 5 ) )
  })

  it( 'not enough arguments', () => {
    assert.throws( () => new ImageData() )
    assert.throws( () => new ImageData( 5 ) )
  })
})
