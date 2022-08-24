import fs from 'fs/promises'
import app from '../index'
import supertest from 'supertest'

const request = supertest(app)
describe('Testing Endpoints', () => {
  describe('Basic Endpoints Testing', () => {
    it('must make the homepage redirect to the /api homepage', async () => {
      const response = await request.get('/')
      expect(response.status).toBeCloseTo(300, -1)
    })

    it('must make the API homepage be accessed successfully', async () => {
      const response = await request.get('/api')
      expect(response.status).toBe(200)
    })
  })

  describe('Simulating Endpoint Errors', () => {
    it('should be an error -- missing query parameters', async () => {
      const response = await request.get('/api/images')
      expect(response.status).toBe(400)
    })

    it('should be an error -- missing dimensions', async () => {
      const response = await request.get('/api/images?filename=nonsense')
      expect(response.status).toBe(400)
    })

    it('should be an error -- dimensions should be numeric', async () => {
      const response = await request.get(
        '/api/images?filename=nonsense&width=abc&height=def'
      )
      expect(response.status).toBe(400)
    })

    it('should be an error -- dimensions should be positive', async () => {
      const response = await request.get(
        '/api/images?filename=nonsense&width=-200&height=-300'
      )
      expect(response.status).toBe(400)
    })

    it('should be an error -- file does not exist', async () => {
      const response = await request.get(
        '/api/images?filename=nonsense&width=200&height=300'
      )
      expect(response.status).toBe(404)
    })
  })

  const filename = 'fjord'
  const width = 700
  const height = 700

  describe('Testing Image Processing', () => {
    it('should process the image successfully', async () => {
      const response = await request.get(
        `/api/images?filename=${filename}&width=${width}&height=${height}`
      )
      expect(response.status).toBe(200)
    })

    it('should be stored in the cache folder', async () => {
      const procImgName = `${filename}-${width}x${height}.jpg`
      const thumbs = await fs.readdir('assets/thumbs')
      const processedImageExists = thumbs.indexOf(procImgName) !== -1

      expect(processedImageExists).toBe(true)
    })
  })
})
