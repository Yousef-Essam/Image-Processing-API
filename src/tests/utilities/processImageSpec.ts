import sizeOf from 'buffer-image-size'
import fs from 'fs/promises'
import processImage from '../../utilities/processImage'

describe('Testing Resizing Functionality', () => {
  let filename: string, width: number, height: number

  filename = 'fjord'
  width = 200
  height = 200
  it(`should be ${filename} image with ${width}x${height} dimensions`, async () => {
    const image = await fs.readFile(`assets/full/${filename}.jpg`)
    const processedImage = await processImage(image, width, height)
    const dimensions = sizeOf(processedImage)

    expect(dimensions.width).toBe(width)
    expect(dimensions.height).toBe(height)
  })
  width = 500
  height = 500
  it(`should be ${filename} image with ${width}x${height} dimensions`, async () => {
    const image = await fs.readFile(`assets/full/${filename}.jpg`)
    const processedImage = await processImage(image, width, height)
    const dimensions = sizeOf(processedImage)

    expect(dimensions.width).toBe(width)
    expect(dimensions.height).toBe(height)
  })
  width = 800
  height = 400
  it(`should be ${filename} image with ${width}x${height} dimensions`, async () => {
    const image = await fs.readFile(`assets/full/${filename}.jpg`)
    const processedImage = await processImage(image, width, height)
    const dimensions = sizeOf(processedImage)

    expect(dimensions.width).toBe(width)
    expect(dimensions.height).toBe(height)
  })

  filename = 'encenadaport'
  width = 500
  height = 500
  it(`should be ${filename} image with ${width}x${height} dimensions`, async () => {
    const image = await fs.readFile(`assets/full/${filename}.jpg`)
    const processedImage = await processImage(image, width, height)
    const dimensions = sizeOf(processedImage)

    expect(dimensions.width).toBe(width)
    expect(dimensions.height).toBe(height)
  })

  filename = 'icelandwaterfall'
  width = 500
  height = 500
  it(`should be ${filename} image with ${width}x${height} dimensions`, async () => {
    const image = await fs.readFile(`assets/full/${filename}.jpg`)
    const processedImage = await processImage(image, width, height)
    const dimensions = sizeOf(processedImage)

    expect(dimensions.width).toBe(width)
    expect(dimensions.height).toBe(height)
  })

  filename = 'palmtunnel'
  width = 500
  height = 500
  it(`should be ${filename} image with ${width}x${height} dimensions`, async () => {
    const image = await fs.readFile(`assets/full/${filename}.jpg`)
    const processedImage = await processImage(image, width, height)
    const dimensions = sizeOf(processedImage)

    expect(dimensions.width).toBe(width)
    expect(dimensions.height).toBe(height)
  })

  filename = 'santamonica'
  width = 500
  height = 500
  it(`should be ${filename} image with ${width}x${height} dimensions`, async () => {
    const image = await fs.readFile(`assets/full/${filename}.jpg`)
    const processedImage = await processImage(image, width, height)
    const dimensions = sizeOf(processedImage)

    expect(dimensions.width).toBe(width)
    expect(dimensions.height).toBe(height)
  })
})
