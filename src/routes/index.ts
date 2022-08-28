import express from 'express'
import fs from 'fs/promises'
import imageExists from '../utilities/imageExists'
import thumbExists from '../utilities/thumbExists'
import processImage from '../utilities/processImage'

const routes = express.Router()

routes.get('/images', async (req: express.Request, res: express.Response): void => {
  const filename = req.query.filename as string
  const width = Number(req.query.width)
  const height = Number(req.query.height)

  if (
    !('filename' in req.query && 'width' in req.query && 'height' in req.query)
  )
    res
      .status(400)
      .send(
        'Bad Request! You must enter the filename, and the dimensions of the processed image.'
      )
  else if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0)
    res.status(400).send('Bad Request! Dimensions must be a positive number.')
  else if (await imageExists(`${filename}.jpg`))
    try {
      const thumbKey = `${filename}-${width}x${height}.jpg`

      let processedImg

      if (!(await thumbExists(filename, width, height))) {
        console.log('Creating Processed Image')
        const img = await fs.readFile(`assets/full/${filename}.jpg`)
        processedImg = await processImage(img, width, height)
        fs.writeFile(`assets/thumbs/${thumbKey}`, processedImg)
      } else {
        console.log('Reading Cached Image')
        processedImg = await fs.readFile(`assets/thumbs/${thumbKey}`)
      }

      res.end(processedImg)
    } catch (err) {
      console.log(err)
      res.status(404).send('An error occured during loading the image.')
    }
  else
    res
      .status(404)
      .send(
        'Image not Found! The Image you are trying to process does not exist.'
      )
})

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send(`Welcome in the Image Processing Application.<br>
    Please Enter the name of the image you want to process along with the desired dimensions.<br>
    Enter the image information in the following format:<br>
    filename=&lt;filename&gt;&width=&lt;width&gt;&height=&lt;height&gt;`)
})

export default routes
