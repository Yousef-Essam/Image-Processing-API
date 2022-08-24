import fs from 'fs/promises'

const imageExists = async (image: string) => {
  const images = await fs.readdir('assets/full')
  return images.indexOf(image) !== -1
}

export default imageExists
