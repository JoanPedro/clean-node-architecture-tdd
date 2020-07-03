const request = require('supertest')
const app = require('../config/app')

describe('Content-Type Middleware', () => {
  test('Should return JSON content-type as default', async () => {
    app.get('/content-type', (req, res) => {
      res.send('')
    })

    await request(app)
      .get('/content-type')
      .expect('content-type', /json/)
  })

  test('Should return xml content-type if forced', async () => {
    app.get('/test_content-type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test_content-type_xml')
      .expect('content-type', /xml/)
  })
})
