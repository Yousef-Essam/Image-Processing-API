import fs from 'fs/promises'

const thumbExists = async (filename: string, width: number, height: number) => {
  const searchKey = `${filename}-${width}x${height}.jpg`
  const fileNames = await fs.readdir('assets/thumbs')

  return fileNames.indexOf(searchKey) !== -1
}

export default thumbExists
