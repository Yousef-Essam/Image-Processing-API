import sharp from 'sharp'

const processImage = async (img: Buffer, width: number, height: number) => {
  const newImg = await sharp(img).resize({ width, height }).toBuffer()

  return newImg
}

export default processImage
