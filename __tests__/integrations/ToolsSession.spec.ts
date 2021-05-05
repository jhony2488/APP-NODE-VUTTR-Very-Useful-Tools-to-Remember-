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
  it('should answer 200 in the post tool creation request for this route', async () => {
    const response = await request(app)
      .post(`/users/tools/${2}`)
      .send({
        title: 'carbonita9.0',
        link: 'https://carbon.now.sh/',
        description: 'description',
        title_tags: ['angular.js'],
      })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the post tool creation request for this route', async () => {
    const response = await request(app)
      .post(`/users/tools/${2}`)
      .send({
        title: 'carbonita9.0',
        link: 'https://carbon.now.sh/',
        description: 'description',
        title_tags: ['angular.js'],
      })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the get tools of user request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the get tools of user request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the get tools of user with page request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}?page=1`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the get tools of user with page request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}?page=1`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the get tools of user with tag request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}?tag=angular`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the get tools of user with tag request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}?tag=angular`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the get tools of user with page and tag request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}?page=1&tag=angular`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the get tools of user  with page and tag request for this route', async () => {
    const response = await request(app)
      .get(`/users/tools/${2}?page=1&tag=angular`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the put tools update of user  request for this route', async () => {
    const response = await request(app)
      .put(`/users/${2}/tools/${1}`)
      .send({
        title: 'carbonita10.0',
        link: 'https://carbon.now.sh/',
        description: 'description',
        title_tags: ['angular.js', 'vue.js'],
      })
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the put tools update of user request for this route', async () => {
    const response = await request(app)
      .put(`/users/${2}/tools/${1}`)
      .send({
        title: 'carbonita10.0',
        link: 'https://carbon.now.sh/',
        description: 'description',
        title_tags: ['angular.js', 'vue.js'],
      })
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })

  it('should answer 200 in the tools delete of user request for this route', async () => {
    const response = await request(app)
      .delete(`/users/${2}/tools/${1}`)
      .set({ 'auth-token': process.env.APP_SECRET })

    expect(response.status).toBe(200)
  })

  it('should answer 401 in the tools delete of user request for this route', async () => {
    const response = await request(app)
      .delete(`/users/${2}/tools/${1}`)
      .set({ 'auth-token': '2012878788778' })

    expect(response.status).toBe(401)
  })
})
