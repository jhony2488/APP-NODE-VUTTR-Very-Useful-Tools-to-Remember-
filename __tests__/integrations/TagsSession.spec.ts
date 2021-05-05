export {}

const app = require('../../src/app').express
import request from 'supertest'

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

describe('ToolSession', () => {
  it('should answer 200 in the post tag creation request for this route', async () => {
    const response = await request(app)
      .post(`/tags`)
      .send({ title: 'jhony araujo tag' })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the post tag creation request for this route', async () => {
    const response = await request(app)
      .post(`/tags`)
      .send({ title: 'jhony araujo tag' })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the get tags request for this route', async () => {
    const response = await request(app)
      .get(`/tags`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the get tags request for this route', async () => {
    const response = await request(app)
      .get(`/tags`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the put tags update request for this route', async () => {
    const response = await request(app)
      .put(`/tags/${1}`)
      .send({ title: 'jhony araujo tags' })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the put tools update of user request for this route', async () => {
    const response = await request(app)
      .put(`/tags/${1}`)
      .send({ title: 'jhony araujo tags' })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the tools delete of user request for this route', async () => {
    const response = await request(app)
      .delete(`/tags/${1}`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the tools delete of user request for this route', async () => {
    const response = await request(app)
      .delete(`/tags/${1}`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })
})
